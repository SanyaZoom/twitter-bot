var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000 
});

//show followers ids
/*
bot.get('followers/ids', {screen_name: 'Aleks_Semenets'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/

//show followers list
/*
bot.get('followers/list', {screen_name: 'Aleks_Semenets'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/
    
//show followers screen_name
/*
bot.get('followers/list', {screen_name: 'Aleks_Semenets'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            data.users.forEach(function (user) {
                console.log(user.screen_name);
            });
        }
    });
*/

//show friend's info by screen_name
/*
bot.post('friendships/create', {screen_name: 'VadimGerasimov'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/

//show friends ids
/*
bot.get('friends/ids', {screen_name: 'Aleks_Semenets'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/

//show friends info list
/*
bot.get('friends/list', {screen_name: 'Aleks_Semenets'}
    , function(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/    

//show basic friend's info by screen_name
/*
bot.get('friendships/lookup', {screen_name: 'SergeySolonecki'},
    function(err, data, response){
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
*/

//send new message to friend by screen_name
bot.post('direct_messages/new', {screen_name: 'SergeySolonecki', text: 'hello, Serge!'}, 
    function(err, data, response){
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });







