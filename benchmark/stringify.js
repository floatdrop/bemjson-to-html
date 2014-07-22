/* global suite, bench, set */

var serialize = require('..');
var bh = new (require('bh').BH)();
var escape = require('../escape.js');

var bemjson = {
    block: 'html',
    tag: 'html',
    js: {
        some: 'jsattr'
    }
};

suite('stringify', function () {
    bench('stringify (no escaping)', function () {
        return '<' + bemjson.tag + 'onclick="' + JSON.stringify(bemjson.js) + '"></' + bemjson.tag + '>';
    });

    bench('stringify (escaped with replace)', function () {
        return '<' + bemjson.tag + 'onclick="' + JSON.stringify(bemjson.js).replace(/"/g, '&quot;') + '"></' + bemjson.tag + '>';
    });

    bench('stringify (escaped)', function () {
        return '<' + bemjson.tag + 'onclick="' + escape(JSON.stringify(bemjson.js)) + '"></' + bemjson.tag + '>';
    });

    bench('bemhtml-to-html', function () {
        serialize(bemjson);
    });

    bench('bh', function () {
        bh.toHtml(bemjson);
    });
});

