/* global describe, it, beforeEach */

var bemjson = new (require('..'))();
require('should');

describe('serialize', function() {
    describe('content', function() {
        it('should return empty content #1', function() {
            bemjson.toHtml([
                false,
                null,
                undefined,
                [],
                '',
                { content: false }, // `div` is here
                { tag: false }
            ]).should.equal('<div></div>');
        });
    });

    describe('mods', function() {
        it('should ignore null mods', function() {
            bemjson.toHtml({ block: 'button', tag: 'a', mods: { type: null } }).should.equal(
                '<a class="button"></a>'
            );
        });
        it('should ignore empty mods', function() {
            bemjson.toHtml({ block: 'button', tag: 'a', mods: { type: '' } }).should.equal(
                '<a class="button"></a>'
            );
        });
        it('should not ignore boolean mods', function() {
            bemjson.toHtml({ block: 'button', mods: { visible: false, disabled: true } }).should.equal(
                '<div class="button button_disabled"></div>'
            );
        });
    });

    describe('mix', function() {
        it('should not set undefined mix', function() {
            bemjson.toHtml({
                block: 'button',
                mix: [null, undefined]
            }).should.equal('<div class="button"></div>');
        });
        it('should set elem mix', function() {
            bemjson.toHtml({ block: 'button', mix: [{elem: 'mix'}] }).should.equal('<div class="button button__mix"></div>');
        });
        it('should set mods mix', function() {
            bemjson.toHtml({ block: 'button', mix: [ { mods: { disabled: true, theme: 'normal' } }]}).should.equal(
                '<div class="button  button_disabled button_theme_normal"></div>'
            );
        });
        it('should set elem mods mix', function() {
            bemjson.toHtml({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] }).should.equal(
                '<div class="button button__control button__control_disabled"></div>'
            );
        });
        it('should set elem elemMods mix', function() {
            bemjson.toHtml({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] }).should.equal(
                '<div class="button button__control button__control_disabled"></div>'
            );
        });
        it('should set several mixes', function() {
            bemjson.toHtml({ block: 'button', mix: [
                { block: 'link' },
                { elem: 'control' },
                { mods: { disabled: true } },
                { block: 'label', elem: 'first', elemMods: { color: 'red' } }
            ]}).should.equal(
                '<div class="button link button__control  button_disabled label__first label__first_color_red"></div>'
            );
        });
    });
});
