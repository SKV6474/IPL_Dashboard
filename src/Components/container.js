import React from "react";
import "./container.css";

import Header from "./Header";
import TeamCard from "./IPLDashboard/teamCard";

class Container extends React.Component {
  render() {
    return (
      <div className="teamsContainer">
        <div className="container">
          <Header />
          <TeamCard />
        </div>
      </div>
    );
  }
}

export default Container;
