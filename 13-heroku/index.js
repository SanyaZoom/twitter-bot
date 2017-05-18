var Twit = require('twit');

var bot = new Twit({
    consumer_key: 'zuaYbCmSVC6sz1JlerLE895LD',
    consumer_secret: 'rJhrwILfl9TLGhVRwYe1uJNndJV7tglhvQmgp31ARE8PbEDwfn',
    access_token: '861248308232192000-jTbxhJIDTQJLv1lzYU73XjJ1zUcdJQS',       
    access_token_secret: '17dQWpGQPVceKfz9bCgmgtqlfnHoZC2bcKYf4OcBVc2Tw',
    timeout_ms: 60*1000 
});

//post twit
bot.post('statuses/update', {status: 'My first bot for twitter! <Test>'}
    , function(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(data.text + ' was tweeted.');
        }
    });
