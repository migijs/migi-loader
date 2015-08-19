var lefty = require('lefty');
var jaw = require('jaw');

var url = require('url');

module.exports = function(source) {
  if(this.cacheable) {
    this.cacheable();
  }
  var config = url.parse(this.query, true).query;
  var lie = config.lie == 'true';
  var es5 = config.es5 == 'true';
  var css = config.css == 'true';
  var j = config.jaw == 'true';

  if(css) {
    return jaw.parse(source);
  }

  if(j) {
    source = source.replace(/\bjaw\s*\.\s*parse\s*\(\s*(.+?)\s*\)/g, '$1');
  }

  return lefty.parse(source, lie, es5);
};