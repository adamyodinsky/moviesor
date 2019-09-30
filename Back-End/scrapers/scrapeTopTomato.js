const request = require('request-promise-native');
const cheerio = require('cheerio');

const random_item = (items) => items[Math.floor(Math.random()*items.length)];
let movies = [];
let movie;
let response;

const randomMovie = async () => {
    const url = "https://www.rottentomatoes.com/top/";

    response = request(url, (err, res, html) => {
        if (!err && res.statusCode === 200) {
            const $ = cheerio.load(html);

            let a_list = $('.movie_list').find('td.middle_col').find('a');

            a_list.each((i, e) => {
                movies.push(e.children[0].data);
            });

            movie = random_item(movies);
            console.log(movie+"bla");
        }
    });

};
randomMovie();

module.exports = { randomMovie };