# bemjson-to-html [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]
> BEMJSON to HTML serializer

This is optimized part of jsot-bh for generation HTML from constructed BEMJSON.

## API

### serialize(bemjson)

Returns serialized HTML string.

## Benchmark

```
                      simple
         123,607 op/s » bemhtml-to-html
          78,114 op/s » bh

                      full
          41,462 op/s » bemhtml-to-html
          20,750 op/s » bh
```

## License

MIT (c) [Vesvolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/bemjson-to-html
[npm-image]: http://img.shields.io/npm/v/bemjson-to-html.svg

[travis-url]: https://travis-ci.org/floatdrop/bemjson-to-html
[travis-image]: http://img.shields.io/travis/floatdrop/bemjson-to-html.svg

[depstat-url]: https://david-dm.org/floatdrop/bemjson-to-html
[depstat-image]: https://david-dm.org/floatdrop/bemjson-to-html.svg?theme=shields.io
