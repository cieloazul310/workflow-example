export function add(...n: number[]) {
  if (!n.length) return 0;
  return n.reduce((accum, curr) => accum + curr, 0);
}

export function multiply(...n: number[]) {
  if (!n.length) return 1;
  return n.reduce((accum, curr) => accum * curr, 1);
}

export function divide(...n: number[]) {
  if (!n.length) return 1;
  return n.reduce((accum, curr) => (curr === 0 ? accum : accum / curr), 1);
}
