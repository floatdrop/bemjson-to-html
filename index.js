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

BEMJSON.prototype.bemClasses = function bemClasses(bemjson, argBlock) {
    var block = bemjson.block || argBlock;
    if (bemjson.bem === false || !block) { return ''; }

    var base = block + (bemjson.elem ? '__' + bemjson.elem : '');
    var res = (base === argBlock) ? '' : base;
    var mods = bemjson.elem ? bemjson.elemMods : bemjson.mods;

    if (mods) {
        for (var i in mods) {
            if (typeof mods[i] === 'number') {
                mods[i] += '';
            }
            if (mods[i]) {
                res += ' ' + base + '_' + i + (mods[i] === true ? '' : '_' + mods[i]);
            }
        }
    }

    if (bemjson.mix) {
        if (!Array.isArray(bemjson.mix)) { bemjson.mix = [bemjson.mix]; }
        for (var i = 0; i < bemjson.mix.length; i++) {
            var mix = bemjson.mix[i];
            if (!mix) { continue; }
            res += ' ' + bemClasses(mix, block);
        }
    }

    return res;
};

BEMJSON.prototype.classes = function classes(bemjson, ctxBlock) {
    if (ctxBlock && bemjson.elem && !bemjson.block) {
        bemjson.block = ctxBlock;
    }
    var cls = (bemjson.bem !== false && (bemjson.block || ctxBlock)) ? this.bemClasses(bemjson) : '';
    if (bemjson.cls) { cls += ' ' + bemjson.cls; }
    if (bemjson.jsParams && Object.keys(bemjson.jsParams).length !== 0) { cls += ' i-bem'; }
    if (cls === '') { return ''; }
    return ' class="' + escape(cls) + '"';
};

BEMJSON.prototype.attributes = function attributes(json) {
    if (!json.attrs) { return ''; }
    var attrs = '';
    for (var key in json.attrs) {
        var attr = json.attrs[key];
        if (attr !== null && attr !== undefined) {
            attrs = attrs + ' ' + key + '="' + escape(attr) + '"';
        }
    }
    return attrs;
};

BEMJSON.prototype.fillJsParamsFromMixins = function fillJsParamsFromMixins(json) {
    if (!json.mix) { return; }
    if (!Array.isArray(json.mix)) { json.mix = [json.mix]; }
    var mixes = json.mix;
    for (var i = 0; i < mixes.length; i++) {
        var mix = mixes[i];
        if (mix && mix.js) {
            json.jsParams = json.jsParams || {};
            mix.js = mix.js === true ? {} : mix.js;
            json.jsParams[(mix.block || json.block) + (mix.elem ? '__' + mix.elem : '')] = mix.js;
        }
    }
};


BEMJSON.prototype.concatinateArray = function concatinateArray(array, ctxBlock) {
    var res = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined && array[i] !== false && array[i] !== null) {
            res += this.toHtml(array[i], ctxBlock);
        }
    }
    return res;
};

BEMJSON.prototype.toHtml = function toHtml(bemjson, ctxBlock) {
    if (bemjson === undefined || bemjson === false || bemjson === null) { return ''; }

    if (typeof bemjson !== 'object') {
        return bemjson;
    }

    if (bemjson.block) {
        ctxBlock = bemjson.block;
    }

    if (Array.isArray(bemjson)) {
        return this.concatinateArray(bemjson, ctxBlock);
    }

    if (!bemjson) { return bemjson + ''; }

    if (bemjson.tag === false) { return this.toHtml(bemjson.content || '', ctxBlock); }

    if (bemjson.js) {
        bemjson.jsParams = bemjson.jsParams || {};
        bemjson.jsParams[bemjson.block + (bemjson.elem ? '__' + bemjson.elem : '')] = bemjson.js === true ? {} : bemjson.js;
    }

    this.fillJsParamsFromMixins(bemjson);

    bemjson.tag = bemjson.tag || this._options.defaultTag;
    var res = '<' + bemjson.tag + this.classes(bemjson, ctxBlock) + this.attributes(bemjson);

    if (bemjson.jsParams || bemjson.hasMixJsParams) {
        var jsData = JSON.stringify(bemjson.jsParams).replace(/"/g, '&quot;');
        bemjson.jsAttr = bemjson.jsAttr || this._options.jsAttrName;
        res += ' ' + bemjson.jsAttr + '="' + (this._options.jsAttrIsJs ? 'return ' + jsData + ';' : jsData) + '"';
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

    return res + '>' + this.toHtml(bemjson.content, ctxBlock) + '</' + bemjson.tag + '>';
};


module.exports = BEMJSON;
