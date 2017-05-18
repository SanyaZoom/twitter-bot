var Twit = require("twit");
var tracery = require('tracery-grammar');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

var grammar = tracery.createGrammar({
    /*
    'character': ['K', 'the inspector', 'the director', 'the lawyer', 'the officer'],
    'action': ['walk', 'stroll', 'meander'],
    'place': ['office', 'bank', 'court'],
    'object': ['paper', 'bribe', 'official'],
    // 'origin': ['#character.capitalize# #action.ed# to the #place# for the #object.a#.']
    'origin': ['#character.capitalize# #action.ed# to the #place# to get some #object.s#.']
    */
    'character': ['Karl', 'Aida', 'Hans'],
    'place': ['office', 'bank', 'court'],
    'object': ['letter', 'paper', 'bribe'],
    'setPronouns': [
        '[they:they][them:them][their:their][theirs:theirs]',
        '[they:she][them:her][their:her][theirs:hers]',
        '[they:he][them:him][their:his][theirs:his]'
    ],
    'setJob': [
        '[job:lawyer][actions:argued in court, filed some paperwork]',
        '[job:inspector][actions:talked with the lawyer, conducted meetings]',
        '[job:officer][actions:arrested people, stood in the courtroom]'
    ],
    'story': [
        '#protagonist# the #job# went to the #place# evey day. Usually #they# #actions#. Then #they#' +
        ' picked up #their# #object#.'],
    'origin': ['#[#setPronouns#][#setJob#][protagonist:#character#]story#']
});

grammar.addModifiers(tracery.baseEngModifiers);

var story = grammar.flatten('#origin#');

bot.post('statuses/update', {status: story}, function(err, data, response){
    if(err){
        console.log(err);
    } else {
        console.log('Bot has tweeted ' + story);
    }
});











