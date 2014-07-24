/* global describe, it */

var serialize = require('..');
require('should');

describe('tag property', function () {
    it('should return html tag <div> by default', function() {
        serialize({}).should.equal('<div></div>');
    });
    it('should return html tag <span>', function() {
        serialize({ tag: 'span' }).should.equal('<span></span>');
    });
    it('should return content when `tag` is empty', function() {
        serialize({ tag: false, content: 'label' }).should.equal('label');
    });
});
