import React from "react";
import MovieList from "../components/organisms/MovieList";
import label from "../constants/labels";

const Movies: React.FC = () => {
  document.title = label.PAGE_TITLE_POPULAR_MOVIES;
  return (
    <div>
      <h1>{label.MENU_POPULAR_MOVIES}</h1>
      <MovieList></MovieList>
    </div>
  );
};

export default Movies;
