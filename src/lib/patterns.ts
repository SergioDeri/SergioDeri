/** SVG path for an asanoha (hemp leaf) lattice covering width x height. */
export function asanohaPath(width: number, height: number, side: number): string {
  const rowHeight = (side * Math.sqrt(3)) / 2;
  const n = (value: number) => Number(value.toFixed(2));
  const parts: string[] = [];

  const triangle = (points: [number, number][]) => {
    const cx = (points[0][0] + points[1][0] + points[2][0]) / 3;
    const cy = (points[0][1] + points[1][1] + points[2][1]) / 3;
    for (const [x, y] of points) parts.push(`M${n(x)} ${n(y)}L${n(cx)} ${n(cy)}`);
    parts.push(`M${points.map(([x, y]) => `${n(x)} ${n(y)}`).join("L")}Z`);
  };

  for (let row = 0; row * rowHeight < height; row++) {
    const y = row * rowHeight;
    const offset = row % 2 ? side / 2 : 0;
    for (let x = -side + offset; x < width + side; x += side) {
      triangle([[x, y], [x + side, y], [x + side / 2, y + rowHeight]]);
      triangle([[x + side, y], [x + side / 2, y + rowHeight], [x + (3 * side) / 2, y + rowHeight]]);
    }
  }
  return parts.join("");
}
