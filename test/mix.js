/* global describe, it */

var bemjson2html = require('..');
require('should');

describe('mix property', function () {
    it('should add i-bem class to bemclasses', function () {
        var bemjson = { block: 'button', mix: [{ block: 'mix'}]};
        bemjson2html(bemjson)
        .should.equal('<div class="button mix"></div>');
    });
});
