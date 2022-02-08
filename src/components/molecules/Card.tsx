import React from "react";
import { Link } from "react-router-dom";
import api from "./../../api/api";

const Card: React.FC = (props: any) => {
  const path: string = `${api.MOVIES_COVER_BASE}/t/p/w185/${props.moviesDetails.poster_path}`;
  const votingAverage: number = props.moviesDetails.vote_average;
  const detailsLink: string = '/movie-details/' + props.moviesDetails.id
  let sashesClass: string = "sashes sashes-green";

  if (votingAverage >= 50 && votingAverage < 70) {
    sashesClass = "sashes sashes-yellow";
  } else if (votingAverage === 0) {
    sashesClass = "sashes sashes-grey";
  } else if (votingAverage < 50) {
    sashesClass = "sashes sashes-red";
  } 

  return (
    <div className="card">
      <Link to={detailsLink}>
        <span className={sashesClass}>{votingAverage}</span>
        <div className="card-image">
          <img src={path} alt={props.moviesDetails.title}/>
        </div>
      </Link>
    </div>
  );
};

export default Card;
