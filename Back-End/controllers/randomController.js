const request = require('request-promise-native');
const cheerio = require('cheerio');

const random_item = (items) => items[Math.floor(Math.random()*items.length)];
const url_tomato = "https://www.rottentomatoes.com/top/";


const randomMovieRoute = async (req, res) => {
    
    const options = {
        uri: url_tomato,
        transform: (body) => {
            return cheerio.load(body);
        }
    };
    
    let movies = [];
    let $ = await request(options);
    let a_list = $('.movie_list').find('td.middle_col').find('a');

    a_list.each((i, e) => {
        movies.push(e.children[0].data);
    });

    // let movie = random_item(movies);
    // console.log(movie);


    res.json({movie: movies});
};

module.exports = { randomMovieRoute };