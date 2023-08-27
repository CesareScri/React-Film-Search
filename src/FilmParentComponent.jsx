import React, { useState, useEffect } from 'react';
import FilmCards from './FilmCards';
import StarRating from './StarRating';

const FilmParentComponent = (films) => {
    const [filmDetails, setFilmDetails] = useState('');
    const [isClicked, setIsClicked] = useState(false); 

    const handleFilmClick = async (id) => {
        const url = `https://movie-database-alternative.p.rapidapi.com/?r=json&i=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '425c83476bmshdbcc4ea4311bb3ep142989jsnf57eaeb83005',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setFilmDetails(result);
            setIsClicked(true);
        } catch (error) {
            console.error(error);
        }
    };

    const filmData = films;

    const FilmCard = () => {
        const filmDataInfo = filmDetails

        return(
            <div className='film-card-poster'>
                <img className='img-poster' src={filmDataInfo.Poster} />
                    <div className='film-info-data'>
                        <h2>{filmDataInfo.Year.replace('-', ' - ')}</h2>
                        <h1>{filmDataInfo.Title}</h1>
                        <span>{filmDataInfo.Released} ({filmDataInfo.Country})</span>
                        <span className='add-bold-style'>{filmDataInfo.Genre}</span>
                        <div className='rating-card'>
                                <StarRating rating={filmDataInfo.imdbRating}/> 
                                <span className='total-ratings'>({filmDataInfo.imdbRating}/10)</span>
                        </div>
                        <p>{filmDataInfo.Plot}</p>
                    </div>
            </div>
        );
    };

    return (
        <div className='highRes_15552'>
           {!isClicked && <FilmCards films={filmData.films} onFilmClick={handleFilmClick} /> }
           {!!isClicked && <FilmCard /> }
        </div>
    );
};

export default FilmParentComponent;
