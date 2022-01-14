const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://vietnamnet.vn/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []

        // ShowCate1 
        $('.ShowCate1').each((index, el) => {
            const topic = $(el).find('.ParentCate a').text();
            const link_item = $(el).find('.top-one a').attr('href');
            const title = $(el).find('.top-one a').attr('title');
            const thumbnail = $(el).find('.top-one a img').attr('src');
            data.push({ topic: topic, link_item: 'https://vietnamnet.vn/' + link_item, thumbnail: thumbnail, title: title })
        });

        // ShowCate2
        const topic = $('.ShowCate2').find('.ParentCate a').text();
        $('.ShowCate2 .widht-list-images .item').each((index, el) => {
            // const topic = $(el).find('.ParentCate a').text();
            const link_item = $(el).find('.item a').attr('href');
            const title = $(el).find('.item a img').attr('alt');
            const thumbnail = $(el).find('.item a img').attr('src');

            if (link_item !== undefined) {
                data.push({ topic: topic, link_item: 'https://vietnamnet.vn/' + link_item, thumbnail: thumbnail, title: title })
            }
        });

        // ShowCate3 
        $('.ShowCate3').each((index, el) => {
            const topic = $(el).find('.ParentCate a').text();
            const link_item = $(el).find('.top-one a').attr('href');
            const title = $(el).find('.top-one a').attr('title');
            const thumbnail = $(el).find('.top-one a img').attr('src');
            data.push({ topic: topic, link_item: 'https://vietnamnet.vn/' + link_item, thumbnail: thumbnail, title: title })
        });

        fs.writeFileSync('data-vietnamnet.json', JSON.stringify(data));
    }
    else {
        console.log(error);
    }
});
