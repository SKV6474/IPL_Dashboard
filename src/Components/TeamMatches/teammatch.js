import React from "react";
import "./teammatch.css";

import LatestMatch from "./LatestMatch";
import LastMatchCards from "./LatestMatchCards/LastMatchCardContainer";

const listColor = [
  { id: "RCB", Hex: "#a4261d" },
  { id: "KKR", Hex: "#5755a7" },
  { id: "KXP", Hex: "#d91c1f" },
  { id: "CSK", Hex: "#f7db00" },
  { id: "RR", Hex: "#da237b" },
  { id: "MI", Hex: "#13418b" },
  { id: "SH", Hex: "#f26d22" },
  { id: "DC", Hex: "#4f5db0" },
];

class TeamMatchColor extends React.Component {
  handleEvent = (newId) => {
    this.props.onEvent(newId);
  };

  render() {
    const { id } = this.props;
    let index = (ele) => ele.id === id;
    let bgColor = listColor[listColor.findIndex(index)].Hex;
    return (
      <div
        className="teamMatchContainer"
        style={{
          background: `linear-gradient(to bottom,  ${bgColor} 0%,${"#1e293b"} 100%)`,
        }}
      >
        <div className="teamMatch">
          <div className="teamBanner">
            <img
              src={this.props.teamMatchList.team_banner_url}
              alt="teamBanner"
            ></img>
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: "600" }}>
              Latest Matches
            </div>
            <LatestMatch
              LatestMatchDetail={this.props.teamMatchList.latest_match_details}
            />
          </div>
          <div>
            <LastMatchCards
              onEvent={this.handleEvent}
              recentMatch={this.props.teamMatchList.recent_matches}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMatchColor;
