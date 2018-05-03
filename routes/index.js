var express = require('express');
var router = express.Router();

var TwitterStream = require('twitter-stream-api'),
    fs = require('fs');

var keys = {
    consumer_key : "ZMbMCGpY35toMzmITOvGopIed",
    consumer_secret : "PfFCaCAkJRzvjSlRT8FntvaIx9ETWeF1DJ4w7J59ZEawcaeimR",
    token : "986793150277668865-oJsHXWWi5udUD11LhnETS14obor3oQE",
    token_secret : "PEBSmXMMhxr7Dk9m1CPM0hhr8GqjQCVXvz5bBs44e1qL3"
};

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
    track: 'El Bronco'
});

Twitter.pipe(fs.createWriteStream('/home/fachi/Documents/analis/tweets.json'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(Twitter);
});

module.exports = router;
