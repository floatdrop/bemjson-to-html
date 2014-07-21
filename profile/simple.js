var simplejson = require('../bemjsons/simple.js');
var serialize = require('../index.js');

for (var i = 0; i < 1e7; i++) {
    serialize(simplejson);
}
