/* global describe, it */

var bemjson2html = require('..');
require('should');

describe('cls property', function () {
    it('should add class to bemclasses', function () {
        var bemjson = { block: 'checkbox', cls: 'visible' };
        bemjson2html(bemjson)
        .should.equal('<div class="checkbox visible"></div>');
    });
});
