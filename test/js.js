/* global describe, it */

var bemjson = new (require('..'))();
require('should');

describe('js property', function () {
    it('should add i-bem class to bemclasses', function () {
        var data = { block: 'button', js: true };
        bemjson.toHtml(data).should.equal('<div class="button i-bem" onclick="return {&quot;button&quot;:{}}"></div>');
    });
});
