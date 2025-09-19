
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to be not  0', () => {
  expect(sum(1, 2)).not.toBe(0);
});

test('adds 2 + 2 to be 3 liefert Fehler!', () => {
  expect(sum(2, 2)).toBe(3);
});
