var dotenv = require('dotenv').config();
var Twitter = require('twitter');
var watson = require('watson-developer-cloud');

// Configure Twitter instance
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var tone_analyzer = watson.tone_analyzer({
  username: process.env.BLUEMIX_USERNAME,
  password: process.env.BLUEMIX_PASSWORD,
  version: 'v3-beta',
  version_date: '2016-02-11'
});

module.exports = {
  fetchTweets: function(req, res) {
    // var tweetTexts;
    var params = {screen_name: req.body.handle, count: 25};
    client.get('statuses/user_timeline', params, function(err, tweets, response) {
      // tweets returned as []
      // response is raw object ==> of user's entire Twitter
      if(err) {
        return new Error(err);
      }
      var tweetTexts = tweets.map(function(tweet) {
        return tweet.text;
      });

      var tweetBlock = tweetTexts.reduce(function (a, b) {
        return a.concat(' ', b);
      });

      tone_analyzer.tone({ text: tweetBlock },
        function(err, tone) {
          if (err)
            console.log(err);
          else
            res.send(JSON.stringify(tone['document_tone']));
      });
    });
  }
};
