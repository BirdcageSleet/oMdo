var dotenv = require('dotenv').config();
var unirest = require('unirest');
var fs = require('fs');

unirest.get('https://theysaidso.p.mashape.com/quote?category=sanity')
.header('X-Mashape-Key', process.env.THEYSAIDSO_KEY)
.header('Accept', 'application/json')
.end(function (result) {
  console.log(result.body);
  fs.writeFile(__dirname + '/quote.json', JSON.stringify(result.body), function(err) {
    if (err) console.error('There was an error writing to disk', err);
  });
});
