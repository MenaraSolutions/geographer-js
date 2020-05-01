module.exports = State;
module.exports.default = module.exports;

var Base = require('./base')

function State(metaData) {
    if (! (this instanceof State)) return new State(metaData);

    this.metaData = metaData;
}

State.prototype = Object.create(Base.prototype)

State.prototype.getCode = function() {
    return this.getMetaProperty('ids.iso_3166_2');
}

State.prototype.getTimezone = function() {
    return this.getMetaProperty('timezone');
}

State.prototype.getCities = function() {
    return this.getMembers();
}

State.prototype.sourceFile = 'geographer-data/resources/cities/%code%.json'
State.prototype.memberFile = './city'

State.prototype.aliases = {
    'code': 'ids.iso_3166_2',
}