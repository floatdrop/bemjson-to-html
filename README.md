# bemjson-to-html [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]
> BEMJSON to HTML serializer

This is optimized part of jsot-bh for generation HTML from constructed BEMJSON.

## API

### new BEMJSON([options])

Creates serializer object.

__Options__:

 * `jsAttrScheme` _Boolean_ - If `js`, attribute with js params will be prefixed with `return ` (default: `js`).
 * `jsAttrName` _String_ - Specifies name of attribute, that will contain `jsParams` (default: `onclick`).
 * `defaultTag` _String_ - Default tag name for block without `tag` property (default: `div`).

### BEMJSON.toHtml(bemjson)

Returns serialized HTML string.

## Benchmark

```
trivial
4,133,717 op/s » bemjson-to-html
2,371,357 op/s » bh

simple
109,658 op/s » bemjson-to-html
78,604 op/s » bh

full
27,264 op/s » bemjson-to-html
23,367 op/s » bh

stringify
1,508,587 op/s » stringify (no escaping)
843,899 op/s » stringify (escaped with replace)
388,025 op/s » stringify (escaped)
312,156 op/s » bemjson-to-html
220,219 op/s » bh
```

## License

MIT (c) [Vesvolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/bemjson-to-html
[npm-image]: http://img.shields.io/npm/v/bemjson-to-html.svg

[travis-url]: https://travis-ci.org/floatdrop/bemjson-to-html
[travis-image]: http://img.shields.io/travis/floatdrop/bemjson-to-html.svg

[depstat-url]: https://david-dm.org/floatdrop/bemjson-to-html
[depstat-image]: https://david-dm.org/floatdrop/bemjson-to-html.svg?theme=shields.io
