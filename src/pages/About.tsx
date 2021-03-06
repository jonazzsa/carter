import React from "react";
import label from "../constants/labels";
import AboutDeveloper from "./../components/molecules/AboutDeveloper";

const About: React.FC = () => {
  document.title = label.PAGE_TITLE_ABOUT;
  return (
    <div>
      <h1>{label.MENU_ABOUT_DEVELOPER}</h1>
      <AboutDeveloper />
    </div>
  );
};

export default About;
