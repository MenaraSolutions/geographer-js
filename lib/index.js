module.exports = Earth;
module.exports.default = module.exports;

var Base = require('./base')

function Earth() {
    if (! (this instanceof Earth)) return new Earth();
}

Earth.prototype = Object.create(Base.prototype)
Earth.prototype.sourceFile = 'geographer-data/resources/countries.json'
Earth.prototype.memberFile = './country'

Earth.prototype.getCountries = function() {
    return this.getMembers()
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
    return this.getCountries().filter(function(country) { return country.metaData.population >= threshold; });
}

Earth.prototype.getShortName = function() { return 'Earth'; }
Earth.prototype.getLongName = function() { return 'The Blue Marble'; }
Earth.prototype.getCode = function() { return 'SOL-III'; }

