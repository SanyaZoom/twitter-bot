var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000 
});

//search first 5 tweets by name
/*
bot.get('search/tweets', {q: 'balloons', count: 5}, function(err, data, response){
    if(err) {
        console.log(err);
    } else {
        console.log(data.statuses);
    }
});
*/

/*
    examples of query
    balloons, blue fish, "blue fish", red OR blue, happy -birthday, happy -birthday -anniversary, happy :(,
    sad :), #superbawl, from:@screen_name

    examples of filter q: 'dance filter:safe':
    safe, media, vine, images, links

    q: 'dance url:amazon', dance ?, dance since:2017-01-01
*/
bot.get('search/tweets', {q: 'balloons', count: 5}, function(err, data, response){
    if(err) {
        console.log(err);
    } else {
        data.statuses.forEach(function(s){
            console.log(s.text);
            console.log(s.user.screen_name);
            console.log('\n');
        });
    }
});

/*example result_type:
  recent, popular
*/
bot.get('search/tweets', {q: 'dance', result_type: 'recent', count: 5}, function(err, data, response){
    if(err) {
        console.log(err);
    } else {
        data.statuses.forEach(function(s){
            console.log(s.text);
            console.log(s.user.screen_name);
            console.log('\n');
        });
    }
});

bot.get('search/tweets', {q: 'dance', geocode: '37.781157,-122.398720,1mi', count: 5}, function(err, data, response){
    if(err) {
        console.log(err);
    } else {
        data.statuses.forEach(function(s){
            console.log(s.text);
            console.log(s.user.screen_name);
            console.log('\n');
        });
    }
});

bot.get('search/tweets', {q: 'dance', lang: 'es', count: 5}, function(err, data, response){
    if(err) {
        console.log(err);
    } else {
        data.statuses.forEach(function(s){
            console.log(s.text);
            console.log(s.user.screen_name);
            console.log('\n');
        });
    }
});





