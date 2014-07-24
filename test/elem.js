/* global describe, it, beforeEach */

var serialize = require('..');
require('should');

describe('elem', function() {
    it('should not add blockMods to elem', function() {
        serialize({ block: 'html', elem: 'body', mods: { block: true }, elemMods: { elem: true }})
        .should.equal('<div class="html__body html__body_elem"></div>');
    });
});

