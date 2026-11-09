// Generates the duotone cutout and the Open Graph card.
// Input: image-cutout.png, the owner's photo with its background removed (kept out of git).
import sharp from "sharp";

const SOURCE = "image-cutout.png";
const FIGURE = { left: 150, top: 70, width: 470, height: 730 };
const HEAD = { left: 105, top: 0, width: 280, height: 280 };
const STOPS = [
  [0, [30, 16, 58]],
  [0.3, [86, 46, 146]],
  [0.74, [255, 92, 170]],
  [1, [196, 236, 250]],
];

function duotoneAt(t) {
  const upper = STOPS.findIndex(([at]) => t <= at);
  if (upper <= 0) return STOPS[0][1];
  const [fromAt, from] = STOPS[upper - 1];
  const [toAt, to] = STOPS[upper];
  const mix = (t - fromAt) / (toAt - fromAt);
  return from.map((c, i) => Math.round(c + (to[i] - c) * mix));
}

const { data, info } = await sharp(SOURCE).extract(FIGURE).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const luma = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];

// Contrast is stretched over the subject only, ignoring transparent pixels.
const subject = [];
for (let i = 0; i < data.length; i += 4) if (data[i + 3] > 200) subject.push(luma(i));
subject.sort((a, b) => a - b);
const low = subject[Math.floor(subject.length * 0.01)];
const high = subject[Math.floor(subject.length * 0.99)];

const output = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i += 4) {
  const t = Math.min(1, Math.max(0, (luma(i) - low) / (high - low)));
  // Faint matte residue would otherwise show up as a box around the drop shadow.
  output.set([...duotoneAt(t), data[i + 3] < 16 ? 0 : data[i + 3]], i);
}

const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
await sharp(output, raw).webp({ quality: 88, alphaQuality: 100 }).toFile("src/assets/portrait.webp");

const avatar = await sharp(output, raw).extract(HEAD).flatten({ background: "#1a0f33" }).png().toBuffer();

const background = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="50%" cy="0%" r="90%"><stop offset="0" stop-color="#4C2A85"/><stop offset="1" stop-color="#050505"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="79" y="164" width="302" height="302" rx="8" fill="none" stroke="#FF6BB5" stroke-width="2"/>
  <text x="440" y="296" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="84" fill="#F3F4F6">Sergio Deri</text>
  <text x="440" y="362" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#FF6BB5">Backend &amp; Full Stack Developer</text>
  <text x="440" y="424" font-family="Menlo, monospace" font-size="24" fill="#5FEBFF">INVITE sip:sergio@localhost</text>
</svg>`;

const small = await sharp(avatar).resize(300, 300).png().toBuffer();
await sharp(Buffer.from(background))
  .composite([{ input: small, left: 80, top: 165 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");
