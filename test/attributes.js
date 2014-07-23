/* global describe, it */

var bemjson2html = require('..');
require('should');

describe('attributes rendering', function () {
    it('some tricky attributes', function () {
        var bemjson = { block: 'checkbox', attrs: { type: 'button', disabled: false, value: null } };
        bemjson2html(bemjson)
        .should.equal('<div class=\"checkbox\" type=\"button\" disabled=\"false\" value=\"null\"></div>');
    });
});
