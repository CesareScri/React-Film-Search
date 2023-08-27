import React, { useState, useEffect } from "react";
import "./App.css";
import SearchSVG from "./assets/search.svg";
import FilmParentComponent from "./FilmParentComponent";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filmData, setFilmData] = useState([]);

  const useCreateFilmCards = async (name) => {

        const url = `https://movie-database-alternative.p.rapidapi.com/?s=${encodeURIComponent(
          name
        )}&r=json&page=1`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "425c83476bmshdbcc4ea4311bb3ep142989jsnf57eaeb83005",
            "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
          },
        };
  
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          if (result.Response === "True") {
            setFilmData(result.Search);
          } else {
            console.log("Something went wrong!");
            alert(`We can't find this: ${name}`);
          }
        } catch (error) {
          console.error(error);
        }
      };

      
  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      document.title = `Search Results for ${searchTerm}`;
      const fetchedFilmData = await useCreateFilmCards(searchTerm); // Call the hook and get the filmData
    } else {
      alert("Please enter a valid query");
    }
  };

  return (
    <div className="cards-container">
        <div className="searchItem">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="es. Dead City"
          />
          <button onClick={handleSearch}>
            <img src={SearchSVG} alt="Search" />
          </button>
      </div>
      {filmData.length == 0 ? null : <FilmParentComponent films={filmData} />}
    </div>
    
  );
};

export default SearchBar;
