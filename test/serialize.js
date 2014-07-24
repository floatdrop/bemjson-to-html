/* global describe, it, beforeEach */

var serialize = require('..');
require('should');

describe('serialize', function() {
    describe('content', function() {
        it('should return empty content #1', function() {
            serialize([
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

    describe('attrs', function() {
        it('should ignore null attrs', function() {
            serialize({ block: 'button', tag: 'a', attrs: { href: null } }).should.equal(
                '<a class="button"></a>'
            );
        });
        it('should not ignore empty attrs', function() {
            serialize({ block: 'button', tag: 'a', attrs: { href: '' } }).should.equal(
                '<a class="button" href=""></a>'
            );
        });
    });

    describe('mods', function() {
        it('should ignore null mods', function() {
            serialize({ block: 'button', tag: 'a', mods: { type: null } }).should.equal(
                '<a class="button"></a>'
            );
        });
        it('should ignore empty mods', function() {
            serialize({ block: 'button', tag: 'a', mods: { type: '' } }).should.equal(
                '<a class="button"></a>'
            );
        });
        it('should not ignore boolean mods', function() {
            serialize({ block: 'button', mods: { visible: false, disabled: true } }).should.equal(
                '<button class="button button_disabled"></button>'
            );
        });
    });

    describe('mix', function() {
        it('should not set undefined mix', function() {
            serialize({
                block: 'button',
                mix: [null, undefined]
            }).should.equal('<div class="button"></div>');
        });
        it('should set elem mix', function() {
            serialize({ block: 'button', mix: [{elem: 'mix'}] }).should.equal('<div class="button button__mix"></div>');
        });
        it('should set mods mix', function() {
            serialize({ block: 'button', mods: [{ disabled: true, theme: 'normal' }] }).should.equal(
                '<div class="button button_disabled button_theme_normal"></div>'
            );
        });
        it('should set elem mods mix', function() {
            serialize({ block: 'button', mix: [{ elem: 'control', mods: { disabled: true } }] }).should.equal(
                '<div class="button button__control button__control_disabled"></div>'
            );
        });
        it('should set elem elemMods mix', function() {
            serialize({ block: 'button', mix: [{ elem: 'control', elemMods: { disabled: true } }] }).should.equal(
                '<div class="button button__control button__control_disabled"></div>'
            );
        });
        it('should set several mixes', function() {
            serialize({ block: 'button', mix: [
                { block: 'link' },
                { elem: 'control' },
                { mods: { disabled: true } },
                { block: 'label', elem: 'first', mods: { color: 'red' } }
            ]}).should.equal(
                '<div class="button link button__control button_disabled label__first label__first_color_red"></div>'
            );
        });
    });
});
