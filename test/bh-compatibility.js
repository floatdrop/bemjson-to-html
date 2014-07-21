/* global describe, it */

var bemjson2html = require('..');
var bh = new (require('bh').BH)();
require('should');

describe('testing rendering vs bh', function () {
    it('empty bemjson', function () {
        var bemjson = {};
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.tag', function () {
        var bemjson = { tag: 'html' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.content', function () {
        var bemjson = { content: 'string' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.attrs', function () {
        var bemjson = { attrs: { some: 'attr"ibute' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.bem', function () {
        var bemjson = { bem: 'true' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.cls', function () {
        var bemjson = { cls: 'class' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block', function () {
        var bemjson = { block: 'html' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block_mod', function () {
       var bemjson = { block: 'html', mods: { mod: true } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block_mod_yes', function () {
       var bemjson = { block: 'html', mods: { mod: 'yes' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block__elem', function () {
        var bemjson = { block: 'html', content: { elem: 'body' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block__elem_mod', function () {
        var bemjson = { block: 'html', content: { elem: 'body', elemMods: { mod: true } } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('bemjson.block__elem_mod_yes', function () {
        var bemjson = { block: 'html', content: { elem: 'body', elemMods: { mod: 'yes' } } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "string"', function () {
        var bemjson = { block: 'html', content: 'string' };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "object" (empty)', function () {
        var bemjson = { block: 'html', content: {} };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "object" (elem)', function () {
        var bemjson = { block: 'html', content: { elem: 'body' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "object" (block)', function () {
        var bemjson = { block: 'html', content: { block: 'body' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "array" (empty)', function () {
        var bemjson = { block: 'html', content: [] };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "array" (elems)', function () {
        var bemjson = { block: 'html', content: [{ elem: 'body' }, { elem: 'body' }] };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.block.content === "array" (blocks)', function () {
        var bemjson = { block: 'html', content: [{ block: 'body' }, { block: 'body' }] };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.mix === "object" (block)', function () {
        var bemjson = { block: 'html', mix: { block: 'body', mods: { red: true } } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.mix === "object" (elem)', function () {
        var bemjson = { block: 'html', mix: { elem: 'body', mods: { red: true } } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.js === "object"', function () {
        var bemjson = { js: { javascript: 'parameter' } };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

    it('typeof bemjson.js === "boolean"', function () {
        var bemjson = { js: true };
        bemjson2html(bemjson).should.equal(bh.toHtml(bemjson));
    });

});
