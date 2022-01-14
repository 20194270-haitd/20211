const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://dantri.com.vn/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []
        $('.news-item').each((index, el) => {
            const link_item = $(el).find('.news-item__avatar').attr('href');
            const title = $(el).find('.news-item__avatar').attr('title');
            const thumbnail = $(el).find('.dt-thumbnail img').attr('src');

            if (link_item !== undefined) {
                data.push({ link_item: 'https://dantri.com.vn/' + link_item, thumbnail: thumbnail, title: title })
            }

        });

        fs.writeFileSync('data-dan-tri.json', JSON.stringify(data));
    }
    else {
        console.log(error);
    }
});
