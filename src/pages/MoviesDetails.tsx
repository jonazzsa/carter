import React from "react";
import label from "../constants/labels";
import CardDetails from "./../components/organisms/CardDetails";

const MoviesDetails: React.FC = () => {
  return (
    <div>
      <h1>{label.MOVIE_DETAILS}</h1>
      <CardDetails></CardDetails>
    </div>
  );
};

export default MoviesDetails;
