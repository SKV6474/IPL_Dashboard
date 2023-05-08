import React from "react";
import "./LatestMatch.css";

class LatestMatch extends React.Component {
  render() {
    const { LatestMatchDetail } = this.props;
    if (LatestMatchDetail) {
      return (
        <div>
          <div className="LatestMatchContainer">
            <div className="leftAndMiddleContainer">
              <div className="LeftSide">
                <div className="competingTeam">
                  {LatestMatchDetail.competing_team}
                </div>
                <div className="date">{LatestMatchDetail.date}</div>
                <div className="venue">{LatestMatchDetail.venue}</div>
                <div className="result">{LatestMatchDetail.result}</div>
              </div>
              <div className="middle">
                <img
                  src={LatestMatchDetail.competing_team_logo}
                  alt="competing Team Logo"
                ></img>
              </div>
            </div>
            <div className="lineBreak"> </div>
            <div className="Right">
              <div className="FirstInnings">
                First Innings<div>{LatestMatchDetail.first_innings}</div>
              </div>
              <div className="SecondInnings">
                Second Innings<div>{LatestMatchDetail.second_innings}</div>
              </div>
              <div className="ManofTheMatch">
                Man of The Match<div>{LatestMatchDetail.man_of_the_match}</div>
              </div>
              <div className="Umpires">
                Umpires<div>{LatestMatchDetail.umpires}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LatestMatch;
