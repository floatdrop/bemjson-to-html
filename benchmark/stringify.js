/* global suite, bench, set */

var BEMJSON = require('..');
var bh = new (require('bh').BH)();
var escape = require('../escape.js');

var bemjson = new BEMJSON();

var data = {
    block: 'html',
    tag: 'html',
    js: {
        some: 'jsattr'
    }
};

suite('stringify', function () {
    bench('stringify (no escaping)', function () {
        return '<' + data.tag + 'onclick="' + JSON.stringify(data.js) + '"></' + data.tag + '>';
    });

    bench('stringify (escaped with replace)', function () {
        return '<' + data.tag + 'onclick="' + JSON.stringify(data.js).replace(/"/g, '&quot;') + '"></' + data.tag + '>';
    });

    bench('stringify (escaped)', function () {
        return '<' + data.tag + 'onclick="' + escape(JSON.stringify(data.js)) + '"></' + data.tag + '>';
    });

    bench('bemjson-to-html', function () {
        bemjson.toHtml(data);
    });

    bench('bh', function () {
        bh.toHtml(data);
    });
});
