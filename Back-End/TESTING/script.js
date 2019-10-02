const request = require('request-promise-native');
const cheerio = require('cheerio');
const sleep = require('thread-sleep');
const logger = require('../helpers/logger');

const tomato_base = "https://www.rottentomatoes.com";
const top_uri  = "top/bestofrt";
const interval = 1000;


const scrapeYearTopMovies = async (uri) => {
  let movie;
  let name;
  let rank;
  let rating;

  const options = {
    uri: uri,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  // Grab html page
  let $ = await request(options);

  // grab tr objects of movies
  let tr_objects = $('table.table').children('tbody').children('tr');
  let tr_element = tr_objects.first();
  let moviesObjects_a = $('table.table').children('tbody').children('tr').find('a');


  // scrape inside a movie page
  for (let i=0; i<tr_objects.length; i++) {
    let link = tr_element.find('a').attr('href');
    console.log(`${tomato_base}${link}`);

    // scrape movie details from movie specific page
    movie = await scrapeMovie(`${tomato_base}${link}`);
    movie.rank = tr_element.children('td.bold').text().trim().replace('.', '');
    movie.rating =  tr_element.find('span.tMeterScore').first().text().trim();
    console.log(movie);

    //TODO and save movie to data base
    // keep it modulated.. DB logic separated as much as possible from crawler scripts
    sleep(Math.round(Math.random()*interval));
    tr_element = tr_element.next(); // move to the next tr element
  }

};


const scrapeMovie = async(uri) => {
  console.log('in scrapeMovie');

  let movie = {
    name: "",
    rank: "",
    rating: "",
    synopsis: "",
    rate: "",
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

  details = details.next('ul').children('li').first(); // first of info element block

  // skip until the matching
  let j=0;
  try {
    while ((details.children('div.meta-label').html().trim() !== 'Rating:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message + `parsing page of movie: ${movie.name} - ${uri}`);
  }

  // grab rate
  if(j<10) {
    let rating = details.children('div.meta-value').first();
    movie.rate = rating.text().trim();
  }

  // skip until the matching
  j=0;
  details = details.next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'Genre:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message);
  }

  // grab genre
  if(j<10) {
    let genres = details.children('div.meta-value').children('a');
    for (let i = 0; i < genres.length; i++) {
      movie.genres.push(genres[i].children[0].data);
    }
  }

  // skip until matching
  j=0;
  details = details.next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'Directed By:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message);
  }

  //grab directors
  if(j<10) {
    let directors = details.children('div.meta-value').children('a');
    for (let i = 0; i < directors.length; i++) {
      movie.directors.push((directors[i].children[0].data));
    }
  }

  // skip until the matching
  j=0;
  details = details.next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'Written By:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message);
  }

  //grab writers
  if(j<10) {
    let writers = details.children('div.meta-value').children('a');
    for (let i = 0; i < writers.length; i++) {
      movie.writers.push((writers[i].children[0].data));
    }
  }

  // skip until the matching
  j=0;
  details = details.next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'In Theaters:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message);
  }

  // grab release date
  if(j<10) {
    let release = details.children('div.meta-value').children('time');
    movie.release = release.text().trim();
  }

  // skip until the matching
  j=0;
  details = details.next().next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'Box Office:') && j < 10) { j++; }
  } catch (e) {
    logger.error(e.message);
  }

  // grab box office
  if(j<10) {
    let boxOffice = details.children('div.meta-value');
    movie.boxOffice = boxOffice.text().trim();
  }
  // skip until the matching
  j=0;
  details = details.next();
  try {
    while ((details.children('div.meta-label').text().trim() !== 'Runtime:') && j < 10) {
      j++;
    }
  } catch (e) {
    logger.error(e.message);
  }
  console.log(movie);
  console.log(j);
  // grab run time
  if(j<10) {
    let runtime = details.children('div.meta-value').children('time');
    movie.runtime = runtime.text().trim();
  }

  return movie;
};

const superCrawler = async (range) => {
  let length = range.end - range.start;
  let year = range.start;

  for(let i=0; i<=length; i++){
    await scrapeYearTopMovies(`${tomato_base}/${top_uri}/?year=${year}`);
    year++;
  }
};

superCrawler({start: 2000, end: 2000});
