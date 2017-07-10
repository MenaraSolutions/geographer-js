module.exports = Earth;
module.exports.default = module.exports;

var countries = require('geographer-data/resources/countries.json')
var Base = require('./base')

function Earth() {
    if (! (this instanceof Earth)) return new Earth();
}

Earth.prototype = Object.create(Base.prototype)

Earth.prototype.getCountries = function() {
    return countries;
}

Earth.prototype.findByProperty = function(property, value) {
    return this.getCountries().filter(function(country) { return country[property] == value; });
}

Earth.prototype.getAfrica = function() {
    return this.findByProperty('continent', 'AF')
}

Earth.prototype.getEurope = function() {
    return this.findByProperty('continent', 'EU')
}

Earth.prototype.getNorthAmerica = function() {
    return this.findByProperty('continent', 'NA')
}

Earth.prototype.getSouthAmerica= function() {
    return this.findByProperty('continent', 'SA')
}

Earth.prototype.getOceania = function() {
    return this.findByProperty('continent', 'OC')
}

Earth.prototype.getAsia = function() {
    return this.findByProperty('continent', 'AS')
}

Earth.prototype.withoutMicro = function(threshold = 100000) {
    return this.getCountries().filter(function(country) { return country.population >= threshold; });
}