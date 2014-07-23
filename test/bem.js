/* global describe, it */

var bemjson2html = require('..');
require('should');

describe('bem property', function () {
    it('should not add class to bem=`false` object', function () {
        var bemjson = { block: 'checkbox', bem: false };
        bemjson2html(bemjson)
        .should.equal('<div></div>');
    });
});
