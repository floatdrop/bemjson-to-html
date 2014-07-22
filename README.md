# bemjson-to-html [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]
> BEMJSON to HTML serializer

This is optimized part of jsot-bh for generation HTML from constructed BEMJSON.

## API

### serialize(bemjson)

Returns serialized HTML string.

## Benchmark

```
                      trivial
       4,285,259 op/s » bemhtml-to-html
       2,251,371 op/s » bh

                      simple
         115,874 op/s » bemhtml-to-html
          76,086 op/s » bh

                      full
          29,617 op/s » bemhtml-to-html
          19,726 op/s » bh

                      stringify
       1,302,816 op/s » stringify (no escaping)
         743,184 op/s » stringify (escaped with replace)
         394,414 op/s » stringify (escaped)
         334,502 op/s » bemhtml-to-html
         200,157 op/s » bh
```

## License

MIT (c) [Vesvolod Strukchinsky](floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/bemjson-to-html
[npm-image]: http://img.shields.io/npm/v/bemjson-to-html.svg

[travis-url]: https://travis-ci.org/floatdrop/bemjson-to-html
[travis-image]: http://img.shields.io/travis/floatdrop/bemjson-to-html.svg

[depstat-url]: https://david-dm.org/floatdrop/bemjson-to-html
[depstat-image]: https://david-dm.org/floatdrop/bemjson-to-html.svg?theme=shields.io
