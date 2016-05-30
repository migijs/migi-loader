var lefty = require('lefty');

var url = require('url');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  var config = url.parse(this.query, true).query;
  var es5 = config.es5 == 'true';

  return lefty.parse(source, es5);
};