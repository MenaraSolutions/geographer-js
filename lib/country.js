module.exports = Country;
module.exports.default = module.exports;

var Base = require('./base')

function Country(metaData) {
    if (! (this instanceof Country)) return new Country(metaData);

    this.metaData = metaData;
}

Country.prototype = Object.create(Base.prototype)

Country.prototype.aliases = {
    'code': 'ids.iso_3166_1[0]',
    'code3': 'ids.iso_3166_1[1]',
    'isoCode': 'ids.iso_3166_1[0]',
    'numericCode': 'ids.iso_3166_1[2]',
    'geonamesCode': 'ids.geonames',
    'fipsCode': 'ids.fips',
    'phonePrefix': 'phone',
    'language': 'languages[0]',
}