import React, {useState, useRef} from 'react';
import './App.css';

const FilmCards = ({ films, selectedFilmId, onFilmClick }) => {
    const [isClicked, setIsClicked] = useState(false); 

    const HandleFilmClick = (id) => {
        onFilmClick(id); // Call the parent component's onFilmClick function with the clicked film's ID
        setIsClicked(true);

    };

    return (
        <div className="film-holder">
           { !isClicked && films.map(film => (
                <div
                    className={`film-card ${film.imdbID === selectedFilmId ? 'clicked-film' : ''}`}
                    key={film.imdbID}
                    id={film.imdbID}
                    onClick={() => HandleFilmClick(film.imdbID)}
                >
                    <img src={film.Poster} alt={film.Title} />
                    <h2>{film.Title}</h2>
                    <p>{film.Year}</p>
                    {/* Add other film information as needed */}
                </div>
            ))
            } 
        </div>
    );
};

export default FilmCards;
