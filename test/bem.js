/* global describe, it */

var bemjson = new (require('..'));
require('should');

describe('bem property', function () {
    it('should not add class to bem=`false` object', function () {
        var data = { block: 'checkbox', bem: false };
        bemjson.toHtml(data).should.equal('<div></div>');
    });
});
