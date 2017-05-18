var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000 
});

//show all info about first 5 posts on home page
/*
bot.get('statuses/home_timeline', {count: 5},
    function(err, data, response){
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/

//show all info about first 5 posts on home page each row from new line
/*
bot.get('statuses/home_timeline', {count: 5},
    function(err, data, response){
        if(err) {
            console.log(err);
        } else {
            data.forEach(function(d){
                console.log(d);
                console.log('\n');
            });
        }
    });
*/

//function
function getBotTimeline() {
    bot.get('statuses/home_timeline', {count: 5},
    function(err, data, response){
        if(err) {
            console.log(err);
        } else {
            data.forEach(function(d){
                console.log(d.text);
                console.log(d.user.screen_name);
                console.log(d.id_str);
                console.log('\n');
            });
        }
    });
}
//getBotTimeline();

//retweet post from friends by id
/*
bot.post('statuses/retweet/:id', {id: '861947933960282114'},
    function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data.text + ' was retweeted.');
        }
    });
*/

//unretweet post from friends by id
/*
bot.post('statuses/unretweet/:id', {id: '861947933960282114'},
    function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data.text + ' was unretweeted.');
        }
    });
*/

//add to my favorite post
/*
bot.post('favorites/create', {id: '861947933960282114'},
    function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data.text + ' was liked.');
        }
    });
*/

//unlike post by id
/*
bot.post('favorites/destroy', {id: '861947933960282114'},
    function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data.text + ' was unliked.');
        }
    });
*/

//add comment to post by id
/*
bot.post('statuses/update', {status: '@VadimGerasimov wow!',
    in_reply_to_status_id: '861947933960282114'}, function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/ 

//delete comment to tweet
bot.post('statuses/destroy/:id', {id: '862751294792110081'}, 
    function(err, data, response) {
        if(err){
            console.log(err);
        } else {
            console.log(data.text + ' was deleted.');
        }
    });