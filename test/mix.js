/* global describe, it */

var bemjson = new (require('..'))();
require('should');

describe('mix property', function () {
    it('should add i-bem class to bemclasses', function () {
        var data = { block: 'button', mix: [{ block: 'mix'}]};
        bemjson.toHtml(data).should.equal('<div class="button mix"></div>');
    });

    it('should mixup mods as elemMods, if mixing to elem', function () {
        var data = { block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }]};
        bemjson.toHtml(data).should.equal('<div class="button button__control button__control_disabled"></div>');
    });

    it('should mixup object', function () {
        var data = { block: 'button', elem: 'section', mix: { block: 'button', elem: 'scroll-compensator' }};
        bemjson.toHtml(data)
        .should.equal('<div class="button__section button__scroll-compensator"></div>');
    });

    it('should mix block name to classes', function () {
        var data = { block: 'button', mix: { block: 'i-global' }};
        bemjson.toHtml(data)
        .should.equal('<div class="button i-global"></div>');
    });
});
