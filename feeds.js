/***
 *  pull out the names of the games in the feed as well as their URLs.
 */
const fetch = require("node-fetch")
const FeedParser = require('feedparser');


FEED_URL = "https://bites-data.s3.us-east-2.amazonaws.com/steam_gaming.xml"
const feedparser = new FeedParser();
const results = []

fetch(FEED_URL)
    .then(res => res.body.pipe(feedparser))
    .catch(err => console.log(`error parsing response: ${err}`))

feedparser.on('readable', function () {
    let item;
    while (item = feedparser.read()) {
        if (item.title && item.link) results.push({ title: item.title, link: item.link })
    }
});

feedparser.on('finish', function () {
    console.log(results)
})