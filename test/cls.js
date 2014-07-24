/* global describe, it */

var bemjson = new (require('..'))();
require('should');

describe('cls property', function () {
    it('should add class to bemclasses', function () {
        var data = { block: 'checkbox', cls: 'visible' };
        bemjson.toHtml(data).should.equal('<div class="checkbox visible"></div>');
    });
});
