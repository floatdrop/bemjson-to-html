/* global describe, it, beforeEach */

var bemjson = new (require('..'))();
require('should');

describe('elem', function() {
    it('should not add blockMods to elem', function() {
        bemjson.toHtml({ block: 'html', elem: 'body', mods: { block: true }, elemMods: { elem: true }})
        .should.equal('<div class="html__body html__body_elem"></div>');
    });
});

