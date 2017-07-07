var Earth = require('../lib/index')

test('first test', () => {
  console.log((new Earth).getCountries())
  expect(5 + 5).toBe(10);
});
