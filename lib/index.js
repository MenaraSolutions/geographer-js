module.exports = Earth;
module.exports.default = module.exports;

function Earth() {
    if (! (this instanceof Earth)) return new Earth();
}

Earth.prototype.getCountries = function() {
    return [
        'Australia',
        'Russia'
    ]
}