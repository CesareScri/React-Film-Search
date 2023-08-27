import React from 'react';
import './App.css';
import SearchBar from './SearchBar'; // Import the SearchBar component
import FilmCards from './FilmCards';

const Container = () => {
    return (
        <div className="container-holder">
            <SearchBar />
        </div>
    );
};

export default Container;
