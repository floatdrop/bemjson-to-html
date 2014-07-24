/* global describe, it */

var bemjson2html = require('..');
require('should');

describe('js property', function () {
    it('should add i-bem class to bemclasses', function () {
        var bemjson = { block: 'button', js: true };
        bemjson2html(bemjson)
        .should.equal('<div class="button i-bem" onclick="return {&quot;button&quot;:{}}"></div>');
    });
});
