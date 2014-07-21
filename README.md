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
