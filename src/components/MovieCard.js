import React from 'react';

  const MovieCard = (props) => {
    const {data} = props;
    return (
      <div className='card_item'>
        <div className='card_inner'>
          <div className='card_top'>
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className='car_bottom'>
            <div className='card_info'>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>  
      </div>
    );
  }

export default MovieCard;
