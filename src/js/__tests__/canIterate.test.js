import canIterate from '../canIterate';

test.each([
  ['Map', new Map(), true],
  ['Set', new Set(), true],
  ['Array', [1, 2, 3], true],
  ['Empty array', [], true],
  ['String', 'Netology', true],
  ['Empty string', '', true],
  ['Number', 10, false],
  ['Zero', 0, false],
  ['Object', {}, false],
  ['Boolean', true, false],
  ['Null', null, false],
  ['Undefined', undefined, false],
  ['Symbol', Symbol('test'), false],
  ['TypedArray', new Uint8Array(3), true],
  ['Invalid iterator', { [Symbol.iterator]: 123 }, false],
])('should check %s', (name, value, expected) => {
  expect(canIterate(value)).toBe(expected);
});

test('should support custom iterable objects', () => {
  const iterable = {
    * [Symbol.iterator]() {
      yield 1;
      yield 2;
    },
  };

  expect(canIterate(iterable)).toBe(true);
});
