const request = require('request'),
      cheerio = require('cheerio'),
      https = require('https');

const parse = ($, selector, cb) =>
        $(selector).children().each(cb);

const url = 'https://news.ycombinator.com/';

request(url, (err, res, body) => {
  const $ = cheerio.load(body);
  parse($, '#hnmain', (i, el) =>
        console.log($(el).text()));
});
