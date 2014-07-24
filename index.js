var escape = require('./escape.js');

var _jsAttrName = 'onclick';
var _defaultTag = 'div';

function BEMJSON (options) {
    options = options || {};
    options.jsAttrScheme = options.jsAttrScheme || 'js';
    options.jsAttrName = options.jsAttrName || _jsAttrName;
    options.jsAttrIsJs = options.jsAttrScheme === 'js';
    options.defaultTag = options.defaultTag || _defaultTag;

    this._options = options;
}

BEMJSON.prototype.bemClasses = function bemClasses(bemjson, block) {
    block = bemjson.block || block;
    if (bemjson.bem === false || !block) { return ''; }

    var base = block + (bemjson.elem ? '__' + bemjson.elem : '');
    var res = base;
    var mods = bemjson.elem ? bemjson.elemMods : bemjson.mods;

    if (mods) {
        for (var i in mods) {
            res += ' ' + base + '_' + i + (mods[i] === true ? '' : '_' + mods[i]);
        }
    }

    if (bemjson.mix) {
        for (var i = 0; i < bemjson.mix.length; i++) {
            res += ' ' + bemClasses(bemjson.mix[i], bemjson.block);
        }
    }

    return res;
};

BEMJSON.prototype.classes = function classes(bemjson) {
    var cls = this.bemClasses(bemjson);
    if (bemjson.cls) { cls += ' ' + bemjson.cls; }
    if (bemjson.js || bemjson.hasJsParams) { cls += ' i-bem'; }
    if (cls === '') { return ''; }
    return ' class="' + escape(cls) + '"';
};

BEMJSON.prototype.attributes = function attributes(json) {
    if (!json.attrs) { return ''; }
    var attrs = '';
    for (var key in json.attrs) {
        attrs = attrs + ' ' + key + '="' + escape(json.attrs[key]) + '"';
    }
    return attrs;
};

BEMJSON.prototype.fillJsParamsFromMixins = function fillJsParamsFromMixins(json) {
    if (!json.mix) { return; }

    var mixes = json.mix;
    for (var i = 0; i < mixes.length; i++) {
        var mix = mixes[i];
        if (mix.js) {
            json.jsParams = json.jsParams || {};
            mix.js = mix.js === true ? {} : mix.js;
            json.jsParams[(mix.block || json.block) + (mix.elem ? '__' + mix.elem : '')] = mix.js;
        }
    }
};


BEMJSON.prototype.concatinateArray = function concatinateArray(array) {
    var res = '';
    for (var i = 0; i < array.length; i++) {
        res += this.toHtml(array[i]);
    }
    return res;
};

BEMJSON.prototype.toHtml = function toHtml(bemjson, options) {
    if (typeof bemjson !== 'object') {
        return bemjson;
    }

    if (Array.isArray(bemjson)) {
        return this.concatinateArray(bemjson);
    }

    if (bemjson.tag === false) { return this.toHtml(bemjson.content || ''); }

    if (bemjson.js) {
        bemjson.jsParams = bemjson.jsParams || {};
        bemjson.jsParams[bemjson.block + (bemjson.elem ? '__' + bemjson.elem : '')] = bemjson.js === true ? {} : bemjson.js;
    }

    this.fillJsParamsFromMixins(bemjson);

    bemjson.tag = bemjson.tag || this._options.defaultTag;
    var res = '<' + bemjson.tag + this.classes(bemjson) + this.attributes(bemjson);

    if (bemjson.jsParams || bemjson.hasMixJsParams) {
        var jsData = JSON.stringify(bemjson.jsParams).replace(/"/g, '&quot;');
        bemjson.jsAttr = bemjson.jsAttr || this._options.jsAttrName;
        res += ' ' + bemjson.jsAttr + '="' + (this._options.jsAttrIsJs ? 'return ' + jsData : jsData) + '"';
    }

    var tag = bemjson.tag;
    if (tag === 'area' ||
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
        tag === 'wbr') { return res + '/>'; }

    return res + '>' + this.toHtml(bemjson.content || '') + '</' + bemjson.tag + '>';
};


module.exports = BEMJSON;
