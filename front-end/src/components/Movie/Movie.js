import './Movie.css'
import React from 'react';

const Movie = (props) => {
  return (
      <article className='Movie'>
        {props.movie}
      </article>
  );
};

export default Movie;