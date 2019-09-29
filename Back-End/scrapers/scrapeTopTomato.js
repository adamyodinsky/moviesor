const request = require('request')
const cheerio = require('cheerio')

const url="https://www.rottentomatoes.com/top/"
movies = []

request(url, (err, res, html) => {
    if(!err && res.statusCode == 200) {
        const $ = cheerio.load(html);

        const a_list = $('.movie_list').
                        find('td.middle_col').
                        find('a');

        a_list.each((i, e) =>{
            movies.push(e.children[0].data);
        });

        return (random_item(movies));
    }
});

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}