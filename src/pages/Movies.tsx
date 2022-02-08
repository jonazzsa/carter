import React from "react";
import MovieList from "../components/organisms/MovieList";
import label from "../constants/labels";

const Movies: React.FC = () => {
  return (
    <div>
      <h1>{label.MENU_POPULAR_MOVIES}</h1>
      <MovieList></MovieList>
    </div>
  );
};

export default Movies;
