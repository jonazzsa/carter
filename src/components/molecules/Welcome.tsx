import React from "react";
import { Link } from "react-router-dom";
import label from "../../constants/labels";

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome">
        <h1 className="welcome-text">{label.WELCOME_MESSAGE}</h1>
        <Link to="/popular-movies" className="btn">
          {label.BROWSE_MOVIES} <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
