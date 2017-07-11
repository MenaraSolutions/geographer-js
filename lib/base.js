module.exports = Base;
module.exports.default = module.exports;

var Collection = require('./collection')

function Base() {
    if (! (this instanceof Base)) return new Base();
}

Base.prototype.shortNames = true;
Base.prototype.members = [];
Base.prototype.metaData = {};

Base.prototype.useShortNames = function() {
    this.shortNames = true;
}

Base.prototype.useLongNames = function() {
    this.shortNames = false;
}

Base.prototype.parent = function() {
    return this.parent;
}

Base.prototype.loadMembers = function() {
    var memberPrototype = require(this.memberFile)
    this.members = require(this.sourceFile)
    this.members = this.members.map(function(metaData) {
        return new memberPrototype(metaData)
    })
}

Base.prototype.getMembers = function() {
    if (this.members.length == 0) {
        this.loadMembers();
    }

    return this.members;
}

Base.prototype.expectsLongNames = function() {
    return ! this.shortNames;
}

Base.prototype.getLongName = function() {
    return this.getMetaProperty('long.default') || this.getMetaProperty('short.default');
}

Base.prototype.getShortName = function() {
    return this.getMetaProperty('short.default') || this.getMetaProperty('long.default')
}

Base.prototype.getName = function() {
    return this.expectsLongNames() ? this.getLongName() : this.getShortName();
}

Base.prototype.findByProperty = function(property, value) {
    return this.getMembers().filter(function(member) { return member.metaData[property] == value; });
}

Base.prototype.getMetaProperty = function(key) {
    return Object.byString(key, this.metaData)
}

Object.assign(Base.prototype, Collection.prototype)

Object.byString = function(s, o) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (isObject(o) && k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

function isObject (o) {
    return o === Object(o);
}