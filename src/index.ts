export function add(...n: number[]) {
  return n.reduce((accum, curr) => accum + curr, 0);
}

export function multiply(...n: number[]) {
  return n.reduce((accum, curr) => accum * curr, 1);
}
