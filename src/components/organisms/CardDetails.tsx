import React, { useEffect, useState } from "react";
import MovieForm from "../molecules/MovieForm";
import DetailsDescription from "../molecules/DetailsDescription";
import DetailsCover from "../molecules/DetailsCover";
import { useParams } from "react-router-dom";
import api from "./../../api/api";

const CardDetails: React.FC = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails]: any = useState({});
  const fetchData = () => {
    fetch(`${api.MOVIES_BASE}/movie/${id}?&api_key=${api.MOVIES_KEY}`)
      .then((res) => res.json())
      .then(
        (result: any) => {
          setMovieDetails(result);
        }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movie-details">
      <div>
        <DetailsCover
          {...movieDetails}
          alt={movieDetails.title}
          movieCover={movieDetails.poster_path}
        ></DetailsCover>
      </div>
      <div>
        <DetailsDescription
          {...movieDetails}
          movieDetails={movieDetails}
        ></DetailsDescription>
        <MovieForm></MovieForm>
      </div>
    </div>
  );
};

export default CardDetails;
