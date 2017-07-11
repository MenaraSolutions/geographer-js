module.exports = Collection;
module.exports.default = module.exports;

function Collection() {
    if (! (this instanceof Collection)) return new Collection();
}

Collection.prototype.find = function(params) {
    var members = this.getMembers()

    return members.filter(function(member) {
        for (var property in params) {
            if (member.aliases && member.aliases[property]) {
                if (member.getMetaProperty(member.aliases[property]) != params[property]) return false;
            } else {
                if (! member.metaData.property) return false;
                if (member.metaData.property != params[property]) return false;
            }
        }

        return true;
    });
}

Collection.prototype.findOne = function(params) {
    var matches = this.find(params);
    if (! matches || matches.length == 0) return false;

    return matches[0];
}