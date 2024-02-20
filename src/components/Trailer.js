

import React from "react";
import { useParams } from "react-router-dom";
import movies from "./movies";

function Trailer() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <h2>{movie.title} Trailer</h2>
      <iframe title="trailer" width="560" height="315" src={movie.trailerLink} frameBorder="0" allowFullScreen></iframe>
    </div>
  );
}

export default Trailer;
