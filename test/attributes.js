/* global describe, it */

var bemjson = new (require('..'))();

require('should');

describe('attributes rendering', function () {
    it('should ignore null attrs', function() {
        bemjson.toHtml({ block: 'button', tag: 'a', attrs: { href: null } }).should.equal(
            '<a class="button"></a>'
        );
    });
    it('should not ignore empty attrs', function() {
        bemjson.toHtml({ block: 'button', tag: 'a', attrs: { href: '' } }).should.equal(
            '<a class="button" href=""></a>'
        );
    });
});
