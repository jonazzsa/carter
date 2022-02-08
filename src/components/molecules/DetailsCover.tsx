import React from "react";
import api from "./../../api/api";

const DetailsCover: React.FC = (props: any) => {
  const path: string = props.movieCover ? `${api.MOVIES_COVER_BASE}/t/p/w185/${props.movieCover}`: "";
  return (
    <div className="details-cover">
      <img src={path} alt={props.alt} />
    </div>
  );
};

export default DetailsCover;
