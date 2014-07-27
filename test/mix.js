/* global describe, it */

var bemjson = new (require('..'))();
require('should');

describe('mix property', function () {
    it('should add i-bem class to bemclasses', function () {
        var data = { block: 'button', mix: [{ block: 'mix'}]};
        bemjson.toHtml(data).should.equal('<div class="button mix"></div>');
    });

    it('should mixup mods as elemMods, if mixing to elem', function () {
        var data = { block: 'button', mix: [{ elem: 'control', mods: { disabled: true } }]};
        bemjson.toHtml(data).should.equal('<div class="button button__control button__control_disabled"></div>');
    });
});
