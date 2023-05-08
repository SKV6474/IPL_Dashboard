import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
          alt="ipl logo"
        ></img>
        <div className="title">IPL Dashboard</div>
      </div>
    );
  }
}

export default Header;
