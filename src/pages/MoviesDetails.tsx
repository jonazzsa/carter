import React from "react";
import label from "../constants/labels";
import CardDetails from "./../components/organisms/CardDetails";

const MoviesDetails: React.FC = () => {
  document.title = label.PAGE_TITLE_POPULAR_MOVIES_DETAILS;
  return (
    <div>
      <h1>{label.MOVIE_DETAILS}</h1>
      <CardDetails></CardDetails>
    </div>
  );
};

export default MoviesDetails;
