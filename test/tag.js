/* global describe, it */

var bemjson = new (require('..'))();
require('should');

describe('tag property', function () {
    it('should return html tag <div> by default', function() {
        bemjson.toHtml({}).should.equal('<div></div>');
    });
    it('should return html tag <span>', function() {
        bemjson.toHtml({ tag: 'span' }).should.equal('<span></span>');
    });
    it('should return content when `tag` is empty', function() {
        bemjson.toHtml({ tag: false, content: 'label' }).should.equal('label');
    });
});
