import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="teamCard">
        <div className="teamImg">
          <img src={this.props.teamImgUrl} alt="team"></img>
        </div>
        <div className="teamName">{this.props.name}</div>
      </div>
    );
  }
}

export default Card;
