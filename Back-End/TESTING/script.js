const request = require('request-promise-native');
const cheerio = require('cheerio');
const sleep = require('thread-sleep');


const tomato_base = "https://www.rottentomatoes.com";
const top_uri  = "top/bestofrt";



const scrapeTopMovies = async (uri) => {
  let movie;
  const options = {
    uri: uri,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  // Grab html page
  let $ = await request(options);

  // grab movies links
  let moviesObjects = $('table.table').children('tbody').children('tr').find('a');
  // TODO - scrape Rank and rating from current page

  // scrape inside a movie page
  for (let i=0; i< moviesObjects.length; i++) {
    let link = moviesObjects[i].attribs.href;
    console.log(`${tomato_base}${link}`);

    // scrape movie details from movie specific page
    movie = await scrapeMovie(`${tomato_base}${link}`);
    console.log(movie);

    //TODO
    // add the scraped Rank and rating from current page to the returned movie object
    // and save movie to data base
    // keep it modulated.. DB logic separated as much as possible from crawler scripts
    sleep(Math.round(Math.random()*3000));
  }

};


const scrapeMovie = async(uri) => {
  console.log('in scrapeMovie');

  let movie = {
    name: "",
    synopsis: "",
    rating: "",
    genres: [],
    directors: [],
    writers: [],
    release: "",
    boxOffice: "",
    runtime: ""
  };

  const options = {
    uri: uri,
    transform: (body) => {
      return cheerio.load(body);
    }
  };


  // Grab html page
  let $ = await request(options);
  let details = $('div#movieSynopsis');

  // grab name and synopsis
  movie.name  = $('h1').html().trim();
  movie.synopsis = details.text().trim();

  details = details.next('ul').children('li').first();

  // grab
  let j=0;
  while((details.children('div.meta-label').html().trim() !== 'Rating:') && j < 10) { j++; };

  if(j<10) {
    let rating = details.children('div.meta-value').first();
    movie.rating = rating.html();
  }

  // grab genre
  j=0;
  details = details.next();
  while((details.children('div.meta-label').html().trim() !== 'Genre:') && j < 10) { j++; };
  if(j<10) {
    let genres = details.children('div.meta-value').children('a');
    for (let i = 0; i < genres.length; i++) {
      movie.genres.push(genres[i].children[0].data);
    }
  }


  //grab directors
  j=0;
  details = details.next();
  while((details.children('div.meta-label').html().trim() !== 'Directed By:') && j < 10) { j++; };

  if(j<10) {
    let directors = details.children('div.meta-value').children('a');
    for (let i = 0; i < directors.length; i++) {
      movie.directors.push((directors[i].children[0].data));
    }
  }

  //grab writers
  j=0;
  details = details.next();
  while((details.children('div.meta-label').html().trim() !== 'Written By:') && j < 10) { j++; };

  if(j<10) {
    let writers = details.children('div.meta-value').children('a');
    for (let i = 0; i < writers.length; i++) {
      movie.writers.push((writers[i].children[0].data));
    }
  }

  // grab release date
  j=0;
  details = details.next();
  while((details.children('div.meta-label').html().trim() !== 'In Theaters:') && j < 10) { j++; };

  if(j<10) {
    let release = details.children('div.meta-value').children('time');
    movie.release = release.html();
  }

  // grab box office
  j=0;
  details = details.next().next();
  while((details.children('div.meta-label').html().trim() !== 'Box Office:') && j < 10) { j++; };

  if(j<10) {
    let boxOffice = details.children('div.meta-value');
    movie.boxOffice = boxOffice.html();
  }

  // grab run time
  j=0;
  details = details.next();
  while((details.children('div.meta-label').html().trim() !== 'Runtime:') && j < 10) { j++; };

  if(j<10) {
    let runtime = details.children('div.meta-value').children('time');
    movie.runtime = runtime.html().trim();
  }

  return movie;
};


const superCrawler = async() => {
//  TODO create a function that iterate over years.. and crawl all of rotten tomato to DB
};

scrapeTopMovies(`${tomato_base}/${top_uri}/?year=2000`);