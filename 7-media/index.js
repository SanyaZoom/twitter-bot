/* global __dirname */

var Twit = require('twit');
var request = require('request');
var fs = require('fs');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 10*1000
});

function getPhoto() {
    var parameters = {
        url: 'http://api.nasa.gov/planetary/apod',
        qs: {
            api_key: 'pHq3hdsRdjZDYxyvzxn501KpWJWK5zCAjPQhgcAD'
        },
        encoding: 'binary'
    };
    request.get(parameters, function(err, response, body){
        body = JSON.parse(body);
        saveFile(body, 'nasa.jpg');
    });
}

function saveFile(body, fileName) {
    var file = fs.createWriteStream(fileName);
    request(body).pipe(file).on('close', function(err){
        if(err){
            console.log(err);
        } else {
            console.log('Media saved.');
            console.log(body);
             var descriptionText = body.title;
            uploadMedia(descriptionText, fileName);
        }
    });
}

function uploadMedia(descriptionText, fileName){
    var filePath = __dirname + '/' + fileName;
    bot.postMediaChunked({file_path: filePath}, function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data);
            var params = {
                status: descriptionText,
                media_ids: data.media_id_string
            };
            postStatus(params);
        }
    });
}

function postStatus(params) {
    bot.post('statuses/update', params, function(err, data, response){
        if(err){
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

//getPhoto();
uploadMedia('Video from NASA', 'nasa_video.mp4');













