import React from "react";
import "./LastMatchCard.css";
import { Link } from "react-router-dom";

const idList = [
  { name: "Ro", ID: "RCB" },
  { name: "Ko", ID: "KKR" },
  { name: "Ki", ID: "KXP" },
  { name: "Ch", ID: "CSK" },
  { name: "Ra", ID: "RR" },
  { name: "Mu", ID: "MI" },
  { name: "Su", ID: "SH" },
  { name: "De", ID: "DC" },
];

function findId(recentMatch) {
  let index = (ele) => ele.name === recentMatch.competing_team.slice(0, 2);
  return idList[idList.findIndex(index)].ID;
}

class LastMatchCard extends React.Component {
  handleEvent = () => {
    let newId = findId(this.props.recentMatch);
    this.props.onEvent(newId);
  };

  render() {
    let newId = findId(this.props.recentMatch);
    return (
      <Link
        to={`/team/${newId}`}
        style={{ textDecoration: "none", color: "#fff" }}
        onClick={this.handleEvent}
      >
        <div className="LastMatchCard">
          <div className="lastMatchCardImg" style={{ margin: 0 }}>
            <img src={this.props.recentMatch.competing_team_logo} alt=""></img>
          </div>
          <div style={{ fontSize: "22px", height: "52px" }}>
            {this.props.recentMatch.competing_team}
          </div>
          <div style={{ height: "40px" }}>{this.props.recentMatch.result}</div>
          <div
            style={{
              color:
                this.props.recentMatch.match_status === "Lost"
                  ? "red"
                  : "green",
              fontSize: "22px",
            }}
          >
            {this.props.recentMatch.match_status}
          </div>
        </div>
      </Link>
    );
  }
}
export default LastMatchCard;
