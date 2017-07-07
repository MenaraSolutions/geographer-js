module.exports = Earth;
module.exports.default = module.exports;

var countries = require('geographer-data/resources/countries.json')

function Earth() {
    if (! (this instanceof Earth)) return new Earth();
}

Earth.prototype.getCountries = function() {
    return countries;
}