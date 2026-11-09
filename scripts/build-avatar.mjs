// Generates the duotone portrait and the Open Graph card from image.png (kept out of git).
import sharp from "sharp";

const SOURCE = "image.png";
const CROP = { left: 195, top: 40, width: 400, height: 400 };
const STOPS = [
  [0, [8, 5, 20]],
  [0.35, [76, 42, 133]],
  [0.68, [255, 92, 170]],
  [1, [205, 250, 255]],
];

function ramp(t) {
  const upper = STOPS.findIndex(([at]) => t <= at);
  if (upper <= 0) return STOPS[0][1];
  const [a, from] = STOPS[upper - 1];
  const [b, to] = STOPS[upper];
  const mix = (t - a) / (b - a);
  return from.map((c, i) => Math.round(c + (to[i] - c) * mix));
}

const { data, info } = await sharp(SOURCE)
  .extract(CROP)
  .greyscale()
  .normalise()
  .raw()
  .toBuffer({ resolveWithObject: true });

const output = Buffer.alloc(info.width * info.height * 3);
for (let i = 0; i < info.width * info.height; i++) {
  const color = ramp(data[i * info.channels] / 255);
  output.set(color, i * 3);
}

const portrait = sharp(output, { raw: { width: info.width, height: info.height, channels: 3 } });
const png = await portrait.clone().png().toBuffer();
await portrait.clone().webp({ quality: 86 }).toFile("src/assets/avatar.webp");

const background = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="50%" cy="0%" r="90%"><stop offset="0" stop-color="#4C2A85"/><stop offset="1" stop-color="#050505"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="79" y="164" width="302" height="302" rx="8" fill="none" stroke="#FF6BB5" stroke-width="2"/>
  <text x="440" y="296" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="84" fill="#F3F4F6">Sergio Deri</text>
  <text x="440" y="362" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#FF6BB5">Backend &amp; Full Stack Developer</text>
  <text x="440" y="424" font-family="Menlo, monospace" font-size="24" fill="#5FEBFF">INVITE sip:sergio@localhost</text>
</svg>`;

const small = await sharp(png).resize(300, 300).png().toBuffer();
await sharp(Buffer.from(background))
  .composite([{ input: small, left: 80, top: 165 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og.png");
