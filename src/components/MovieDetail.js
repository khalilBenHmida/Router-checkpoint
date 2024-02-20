
import React from "react";
import { Link, useParams } from "react-router-dom";
import movies from "./movies";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title="trailer" width="560" height="315" src={movie.trailerLink} frameBorder="0" allowFullScreen></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
