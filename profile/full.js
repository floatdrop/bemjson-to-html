var json = require('../bemjsons/full.js');
var serialize = require('../index.js');

for (var i = 0; i < 1e7; i++) {
    serialize(json);
}
