var escape = require('./escape.js');

function isSelfClosingTag(tag) {
    return tag === 'area' ||
        tag === 'base' ||
        tag === 'br' ||
        tag === 'col' ||
        tag === 'command' ||
        tag === 'embed' ||
        tag === 'hr' ||
        tag === 'img' ||
        tag === 'input' ||
        tag === 'keygen' ||
        tag === 'link' ||
        tag === 'menuitem' ||
        tag === 'meta' ||
        tag === 'param' ||
        tag === 'source' ||
        tag === 'track' ||
        tag === 'wbr';
}

function bemClasses(bemjson, block) {
    block = bemjson.block || block;
    if (bemjson.bem === false || !block) { return ''; }

    var base = block + (bemjson.elem ? '__' + bemjson.elem : '');
    var res = base;
    var mods = bemjson.mods || bemjson.elem && bemjson.elemMods;

    for (var i in mods) {
        res += ' ' + base + '_' + i + (mods[i] === true ? '' : '_' + mods[i]);
    }

    if (bemjson.mix) {
        for (var i = 0; i < bemjson.mix.length; i++) {
            res += ' ' + bemClasses(bemjson.mix[i], bemjson.block);
        }
    }

    return res;
}

function classes(bemjson) {
    var cls = bemjson.cls || '';
    cls += bemClasses(bemjson);
    if (bemjson.hasJsParams) { cls += ' i-bem'; }
    if (cls === '') { return ''; }
    return ' class="' + escape(cls) + '"';
}

function attributes(json) {
    if (!json.attrs) { return ''; }
    var attrs = '';
    for (var key in json.attrs) {
        attrs = attrs + ' ' + key + '="' + escape(json.attrs[key]) + '"';
    }
    return attrs;
}


function fillJsParamsFromMixins(json) {
    if (!json.mix) { return; }

    var mixes = json.mix;
    for (var i = 0; i < mixes.length; i++) {
        var mix = mixes[i];
        if (mix.js) {
            mix.js = mix.js === true ? {} : mix.js;
            json.jsParams[(mix.block || json.block) + (mix.elem ? '__' + mix.elem : '')] = mix.js;
            json.hasMixJsParams = true;
        }
    }

}

var _optJsAttrIsJs = 'onclick';
var _defaultTag = 'div';

function concatinateArray(array) {
    var res = '';
    for (var i = 0; i < array.length; i++) {
        res += serialize(array[i]);
    }
    return res;
}

function serialize(bemjson) {
    if (typeof bemjson !== 'object') {
        return bemjson;
    }

    if (Array.isArray(bemjson)) {
        return concatinateArray(bemjson);
    }

    bemjson.jsParams = {};
    bemjson.tag = bemjson.tag || _defaultTag;
    bemjson.jsAttr = bemjson.jsAttr || _optJsAttrIsJs;

    if (bemjson.js) {
        bemjson.jsParams[bemjson.block + (bemjson.elem ? '__' + bemjson.elem : '')] = bemjson.js === true ? {} : bemjson.js;
    }

    fillJsParamsFromMixins(bemjson);

    var res = '<' + bemjson.tag + classes(bemjson) + attributes(bemjson);

    if (bemjson.hasMixJsParams) {
        var jsData = JSON.stringify(bemjson.jsParams).replace(/"/g, '&quot;');
        res += ' ' + bemjson.jsAttr + '="' + (bemjson.jsAttr === _optJsAttrIsJs ? 'return ' + jsData : jsData) + '"';
    }

    if (isSelfClosingTag(bemjson.tag)) { return res + '/>'; }
    return res + '>' + serialize(bemjson.content || '') + '</' + bemjson.tag + '>';
}

module.exports = serialize;
