import './Movie.css'
import React from 'react';

const DetailsHelper = (propArr, str) => {
  if (propArr.length < 1) {
    return null;
  } else if (propArr.length < 2) {
    return `${str}: ${propArr.join(', ')}`
  } else {
    return `${str}s: ${propArr.join(', ')}`
  }
};

const Movie = (props) => {
  let movie = props.movie;

  let Geners = DetailsHelper(movie.genres, 'Genre');
  let Writers = DetailsHelper(movie.writers, 'Writer');
  let Length = movie.runtime ? `Length: ${movie.runtime}` : null ;

  return (
      <div className='Movie'>
        <h2>
          {movie.fullName}
        </h2>
        <span>
          <p>{Geners}</p>
          <p>{Writers}</p>
          <p>{Length}</p>
        </span>
        <h3>
          Synopsis:
        </h3>
        <article>
          {movie.synopsis}
        </article>
      </div>
  );
};

export default Movie;