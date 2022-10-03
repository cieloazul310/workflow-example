import { add, multiply, divide } from '../src/index';

describe('add', () => {
  it('0 value', () => {
    expect(add()).toBe(0);
  });
  it('1 value', () => {
    expect(add(1)).toBe(1);
  });
  it('2 values', () => {
    expect(add(1, 2)).toBe(3);
  });
  it('3 values', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
  it('4 values', () => {
    expect(add(1, 2, 3, 4)).toBe(10);
  });
});

describe('multiply', () => {
  it('0 value', () => {
    expect(multiply()).toBe(1);
  });
  it('1 value', () => {
    expect(multiply(1)).toBe(1);
  });
  it('2 values', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  it('3 values', () => {
    expect(multiply(1, 2, 3)).toBe(6);
  });
  it('4 values', () => {
    expect(multiply(1, 2, 3, 4)).toBe(24);
  });
});

describe('divide', () => {
  it('0 value', () => {
    expect(divide()).toBe(1);
  });
  it('1 value', () => {
    expect(divide(1)).toBe(1);
  });
  it('2 values', () => {
    expect(divide(1, 2)).toBe(1 / 2);
  });
  it('3 values', () => {
    expect(divide(1, 2, 3)).toBe(1 / 6);
  });
  it('4 values', () => {
    expect(divide(1, 2, 3, 4)).toBe(1 / 24);
  });
});
