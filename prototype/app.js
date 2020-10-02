const RSS = require("rss");
const express = require("express");

const app = express();
const {parseString} = require("xml2js");
const cors = require("cors");

app.use(cors());

const feed = new RSS({
    title: "titgggle",
    description: "descriggggption",
    feed_url: "http://example.com/rss.xml",
    site_url: "http://example.com",
    image_url: "http://example.com/icon.png",
    docs: "http://example.com/rss/docs.html",
    managingEditor: "Dylan Greene",
    webMaster: "Dylan Greene",
    copyright: "2013 Dylan Greene",
    language: "en",
    categories: ["Category 1", "Category 2", "Category 3"],
    pubDate: "May 20, 2012 04:00:00 GMT",
    ttl: "60",
    custom_namespaces: {
        itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
    },
    custom_elements: [
        { "itunes:subtitle": "A show about everything" },
        { "itunes:author": "John Doe" },
        {
            "itunes:summary":
        "All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store",
        },
        {
            "itunes:owner": [
                { "itunes:name": "John Doe" },
                { "itunes:email": "john.doe@example.com" },
            ],
        },
        {
            "itunes:image": {
                _attr: {
                    href:
            "https://pbcdn1.podbean.com/imglogo/image-logo/4310933/WhatsApp_Image_2019-08-28_at_18_43_37.jpeg",
                },
            },
        },
        {
            "itunes:category": [
                {
                    _attr: {
                        text: "Technology",
                    },
                },
                {
                    "itunes:category": {
                        _attr: {
                            text: "Gadgets",
                        },
                    },
                },
            ],
        },
    ],
});

feed.item({
    title: "item title",
    comments: "lololoololool",
    description: "use this for the content. It can include html.",
    url: "http://example.com/article4?this&that", // link to the item
    guid: "1123", // optional - defaults to url
    categories: ["Category 1", "Category 2", "Category 3", "Category 4"], // optional - array of item categories
    author: "Guest Author", // optional - defaults to feed author property
    date: "May 27, 2012", // any format that js Date can parse.
    enclosure: {
        url:
      "https://mcdn.podbean.com/mf/web/r4awmt/MANNFRAU_UND_BEZIEHUNG_PART_1_.mp3",
    }, // optional enclosure
    custom_elements: [
        { "itunes:author": "John Doe" },
        { "itunes:subtitle": "A short primer on table spices" },
        {
            "itunes:image": {
                _attr: {
                    href:
            "http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg",
                },
            },
        },
        { "itunes:duration": "7:04" },
    ],
});
console.log(feed);
const xml = feed.xml();
// console.log(xml);

const port = 3000;

app.get("/", (req, res) => {
    res.set("Content-Type", "text/xml");
    res.send(xml);
});

// app.listen(port, () =>
//     console.log(`Example app listening at http://localhost:${port}`)
// );
