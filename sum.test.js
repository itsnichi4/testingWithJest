
const { sum, capitalize, reverseString, calculator, caesarCipher } = require('./tests');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize function capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize function leaves already capitalized words unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('capitalize function works with empty string', () => {
  expect(capitalize('')).toBe('');
});

test('reverseString function reverses string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString function works with empty string', () => {
  expect(reverseString('')).toBe('');
});

test('reverseString function works with one-character string', () => {
  expect(reverseString('a')).toBe('a');
});

test('calculator object can add two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('calculator object can subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('calculator object can multiply two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('calculator object can divide two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('caesarCipher function shifts each character by specified amount', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('caesarCipher function wraps around from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher function maintains the same case', () => {
  expect(caesarCipher('aBcDe', 2)).toBe('cDeFg');
});

test('caesarCipher function handles punctuations correctly', () => {
  expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});
