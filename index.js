var lefty = require('lefty');

var url = require('url');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  var config = url.parse(this.query, true).query;

  var res = lefty.parse(source);
  if(config.prefix) {
    res = config.prefix + res;
  }
  if(config.suffix) {
    res += config.suffix;
  }

  return res;
};