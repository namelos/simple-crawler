var arr = [];
var parse = function(selector, callback) {
  $(selector).children().each(callback);
};
var log = function(ele, cls) {
  console.log($(ele).find(cls).text())
};
var append = function(content) {
  $('.footer').append(content.join(','));
};
var push = function(content) {
  arr.push(content)
};

parse('.user-item', (i, e) => {
  push($(e).find('.position').text());
});
