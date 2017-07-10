module.exports = Base;
module.exports.default = module.exports;

function Base() {
    if (! (this instanceof Base)) return new Base();
}

Base.prototype.useShortNames = function() {
    this.shortNames = true;
}