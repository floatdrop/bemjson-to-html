/* global describe, it */

var bemjson = new (require('..'))();

require('should');

describe('attributes rendering', function () {
    it('some tricky attributes', function () {
        var data = { block: 'checkbox', attrs: { type: 'button', disabled: false, value: null } };
        bemjson.toHtml(data)
        .should.equal('<div class=\"checkbox\" type=\"button\" disabled=\"false\" value=\"null\"></div>');
    });
});
