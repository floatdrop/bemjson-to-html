/* global suite, bench, set */

var serialize = require('..');
var bh = new (require('bh').BH)();

function versus(json) {
    bench('bemhtml-to-html', function () { serialize(json); });
    bench('bh', function () { bh.toHtml(json); });
}

suite('trivial', function () {
    versus(require('../bemjsons/trivial.js'));
});

suite('simple', function () {
    versus(require('../bemjsons/simple.js'));
});

suite('full', function () {
    versus(require('../bemjsons/full.js'));
});
