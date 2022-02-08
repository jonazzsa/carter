import React, { useState } from "react";
import { Link } from "react-router-dom";
import label from "./../../constants/labels";

export const Menu: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const menuToggler = () => {
    setMenu(!menu);
  };

  return (
    <div className="menu-container">
      <div className="humburger desktop-hide" onClick={menuToggler}>
        <i className="fa fa-bars"></i>
      </div>
      <ul className="menu mobile-hide">
        <li>
          <Link to="/">
            <i className="fa fa-home"></i> {label.MENU_HOME}
          </Link>
        </li>
        <li>
          <Link to="/popular-movies">
            <i className="fa fa-film"></i> {label.MENU_POPULAR_MOVIES}
          </Link>
        </li>
        <li>
          <Link to="/about-developer">
            <i className="fa fa-user"></i> {label.MENU_ABOUT_DEVELOPER}
          </Link>
        </li>
      </ul>
      {menu ? (
        <>
          <div className="menu-overlay desktop-hide"></div>
          <ul className="menu">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i> {label.MENU_HOME}
              </Link>
            </li>
            <li>
              <Link to="/popular-movies">
                <i className="fa fa-film"></i> {label.MENU_POPULAR_MOVIES}
              </Link>
            </li>
            <li>
              <Link to="/about-developer">
                <i className="fa fa-user"></i> {label.MENU_ABOUT_DEVELOPER}
              </Link>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Menu;
