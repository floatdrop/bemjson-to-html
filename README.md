# bemjson-to-html [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]
> BEMJSON to HTML serializer

This is optimized part of jsot-bh for generation HTML from constructed BEMJSON.

## API

### serialize(bemjson)

Returns serialized HTML string.

## Benchmark

```
                      trivial
       4,733,692 op/s » bemhtml-to-html
       2,324,310 op/s » bh

                      simple
         113,435 op/s » bemhtml-to-html
          75,653 op/s » bh

                      full
          30,295 op/s » bemhtml-to-html
          20,691 op/s » bh
```

## License

MIT (c) [Vesvolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/bemjson-to-html
[npm-image]: http://img.shields.io/npm/v/bemjson-to-html.svg

[travis-url]: https://travis-ci.org/floatdrop/bemjson-to-html
[travis-image]: http://img.shields.io/travis/floatdrop/bemjson-to-html.svg

[depstat-url]: https://david-dm.org/floatdrop/bemjson-to-html
[depstat-image]: https://david-dm.org/floatdrop/bemjson-to-html.svg?theme=shields.io
