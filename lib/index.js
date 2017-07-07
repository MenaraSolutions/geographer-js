module.exports = Earth;
module.exports.default = module.exports;

function Earth() {
}

Earth.prototype.getCountries = function() {
    return [
        'Australia',
        'Russia'
    ]
}