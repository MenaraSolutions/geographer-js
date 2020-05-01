module.exports = Country;
module.exports.default = module.exports;

var Base = require('./base')

function Country(metaData) {
    if (! (this instanceof Country)) return new Country(metaData);

    this.metaData = metaData;
}

Country.prototype = Object.create(Base.prototype)

Country.prototype.getCode = function() {
    return this.getMetaProperty('ids.iso_3166_1')[0];
}

Country.prototype.getCode3 = function() {
    return this.getMetaProperty('ids.iso_3166_1')[1];
}

Country.prototype.getCurrencyCode = function() {
    return this.getMetaProperty('currency');
}

Country.prototype.getStates = function() {
    return this.getMembers();
}

Country.prototype.sourceFile = 'geographer-data/resources/states/%code%.json'
Country.prototype.memberFile = './state'

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