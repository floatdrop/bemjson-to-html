/* global suite, bench, set */

var serialize = require('..');
var bh = new (require('bh').BH)();

suite('simple', function () {
    var json = require('../bemjsons/simple.js');
    // bench('return', function () { return '<html>wow, that was fast!</html>'; });
    // bench('concatinate tag and content', function () { return '<' + json.tag + '>' + json.content + '</' + json.tag + '>'; });
    bench('bemhtml-to-html', function () {
        serialize(json);
    });
    bench('bh', function () {
        bh.toHtml(json);
    });
});

suite('full', function () {
    var json = require('../bemjsons/full.js');
    bench('bemhtml-to-html', function () {
        serialize(json);
    });
    bench('bh', function () {
        bh.toHtml(json);
    });
});
