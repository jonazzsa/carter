import React from 'react';
import label from '../../constants/labels';

const DetailsDescription: React.FC = (props: any) => {
  
  let genres = '';

  props.movieDetails.genres?.forEach((item: any, index: number) => {
    genres += `${item.name}, `;
  })

  genres = genres.substr(0, genres.length - 2); 

  return <div className='details-description'>
      <h2>{props.movieDetails.title}</h2>
      <p>{props.movieDetails.tagline}</p>
      <p>{label.DETAILS_RATING} {props.movieDetails.popularity}</p>
      <h2>{label.DETAILS_OVERVIEW}</h2>
      <p>{props.movieDetails.overview}</p>
      <h2>{label.DETAILS_GENRE}</h2>
      <p>{genres}</p>
  </div>;
};

export default DetailsDescription;
