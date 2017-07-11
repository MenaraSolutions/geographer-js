var Earth = require('../lib/index')
var Country = require('../lib/country')

test('All countries are available in the Earth', () => {
  expect(Earth().getCountries().length).toBe(251);
});

test('Earth can choose short names', () => {
  expect(Earth().useShortNames()).toBe(undefined);
});

test('Earth can filter itself by continents', () => {
  expect(Earth().getAfrica().length).toBeGreaterThan(0);
  expect(Earth().getEurope().length).toBeGreaterThan(0);
  expect(Earth().getNorthAmerica().length).toBeGreaterThan(0);
  expect(Earth().getSouthAmerica().length).toBeGreaterThan(0);
  expect(Earth().getAsia().length).toBeGreaterThan(0);
  expect(Earth().getOceania().length).toBeGreaterThan(0);
  expect(Earth().withoutMicro().length).toBeGreaterThan(0);
});

test('Earth can find a country by its code', () => {
  let Australia = Earth().findOne({code: 'AU'})
  expect(Australia).toBeInstanceOf(Country);
  expect(Australia.getName()).toBe('Australia');
  expect(Australia.getLongName()).toBe('Commonwealth of Australia');
});