
import React from "react";
import { Link } from "react-router-dom";
import movies from "./movies";

function Home() {
  return (
    <div>
      <h1>Movie App</h1>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div>
            <h2>{movie.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
