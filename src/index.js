import canIterate from './js/canIterate';

const examples = [
  ['Map', new Map()],
  ['Set', new Set()],
  ['Array', [1, 2, 3]],
  ['String', 'Netology'],
  ['Number', 10],
  ['Object', {}],
  ['Boolean', true],
  ['Null', null],
  ['Undefined', undefined],
];

const results = examples.map(([name, value]) => `${name}: ${canIterate(value)}`);

document.getElementById('result').textContent = results.join('\n');
