var escapeMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
var badChars = /[&<>"]/g;
var possible = /[&<>"]/;

var escapeChar = function(chr) {
    return escapeMap[chr];
};

function escape(string) {
    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
}

module.exports = escape;
