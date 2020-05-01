# geographer-js
[![Build Status](https://travis-ci.org/MenaraSolutions/geographer-js.svg?branch=master)](https://travis-ci.org/MenaraSolutions/geographer-js)
[![Code Climate](https://codeclimate.com/github/MenaraSolutions/geographer-js.png)](https://codeclimate.com/github/MenaraSolutions/geographer-js)

[![NPM](https://nodei.co/npm/geographer-js.png)](https://npmjs.org/package/geographer-js)

Official Geographer JavaScript package - information about all world countries and their subdivisions

## Overview

TBC

## Installation

```bash
$ npm install geographer-js --save
```

## API

```js
const Earth = require('geographer-js')

// Default entry point is our beautiful planet
const planet = Earth()

// Give me a list of all countries please
const countries = Earth().getCountries()

// Now please give me all states of Thailand
const thailand = Earth().getCountries().find(country => country.getCode() == 'TH')
const states = thailand.getStates()

// Oh, but I want them in Russian
const states = thailand.getStates().setLocale('ru')

// Oh, but I want them inflicted to 'in' form (eg. 'in Spain')
const states = thailand.getStates().setLocale('ru').inflict('in')

// What's the capital and do you have a geonames ID for that? Or maybe latitude and longitude?
const capital = thailand.getCapital()
capital.geonamesCode()
capital.getLatitude()
capital.getLongitude()
```
