var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

//stream all posts
//var stream = bot.stream('statuses/sample');

//filter by track: bots OR win OR win, lose OR win lose OR win! 
//var stream = bot.stream('statuses/filter', {track: 'bots'});

//filter by location
//var stream = bot.stream('statuses/filter', {location: '-74,40,-73,41'});

//filter by follow
var stream = bot.stream('statuses/filter', {follow: '191100226'});

stream.on('tweet', function(tweet){
    console.log(tweet.text + '\n');
});























