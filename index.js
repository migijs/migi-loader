var lefty = require('lefty');

var url = require('url');
var path = require('path');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  var config = url.parse(this.query, true).query;
  var lie = config.lie == 'true';
  var es5 = config.es5 == 'true';
  return lefty.parse(source, lie, es5);
};