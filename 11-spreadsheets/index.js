var Twit = require('twit');
var Tabletop = require('tabletop');

var bot = new Twit({
    consumer_key: 'zuaYbCmSVC6sz1JlerLE895LD',
    consumer_secret: 'rJhrwILfl9TLGhVRwYe1uJNndJV7tglhvQmgp31ARE8PbEDwfn',
    access_token: '861248308232192000-jTbxhJIDTQJLv1lzYU73XjJ1zUcdJQS',       
    access_token_secret: '17dQWpGQPVceKfz9bCgmgtqlfnHoZC2bcKYf4OcBVc2Tw',
    timeout_ms: 10*1000 
});

var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1mjCbhDmLA_xGfI1cItynTqLHExLYWeshcV4kRC0LIYs/pubhtml';

Tabletop.init({
    key: spreadsheetUrl,
    callback: function(data, tabletop){
        console.log(data);
        data.forEach(function(d){
            var status = d.URL + ' is a great API to use for Twitter bots!';
            bot.post('statuses/update', {status: status}, function(err, response, data) {
                if(err){
                    console.log(err);
                } else {
                    console.log('Posted!');
                }
            });
        });
    },
    simpleSheet: true
});











