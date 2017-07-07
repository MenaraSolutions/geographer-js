var Earth = require('../lib/index')

test('first test', () => {
  expect(Earth().getCountries().length).toBe(251);
});
