var Twit = require('twit');

var bot = new Twit({
    consumer_key: 'zuaYbCmSVC6sz1JlerLE895LD',
    consumer_secret: 'rJhrwILfl9TLGhVRwYe1uJNndJV7tglhvQmgp31ARE8PbEDwfn',
    access_token: '861248308232192000-jTbxhJIDTQJLv1lzYU73XjJ1zUcdJQS',       
    access_token_secret: '17dQWpGQPVceKfz9bCgmgtqlfnHoZC2bcKYf4OcBVc2Tw',
    timeout_ms: 60*1000 
});

function littleTweet(){
    bot.post('statuses/update', {status: Date.now()}, function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log('Bot posted');
        }
    });
}

setInterval(function(){
    littleTweet();
}, 60*1000);