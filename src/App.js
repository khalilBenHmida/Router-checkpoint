// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import Trailer from "./Trailer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0,
  });
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
  };

  const filterMovies = () => {
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        movie.rating >= filterRating
    );
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onFilterTitleChange={setFilterTitle}
        onFilterRatingChange={setFilterRating}
      />
      <MovieList movies={filterMovies()} />
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;

