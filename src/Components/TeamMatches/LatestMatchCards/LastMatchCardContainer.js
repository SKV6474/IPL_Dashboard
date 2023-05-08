import React from "react";

import "./LastMatchCardContainer.css";
import LastMatchCard from "./LastMatchCard";

class LastMatchCards extends React.Component {
  handleEvent = (newId) => {
    this.props.onEvent(newId);
  };

  render() {
    const { recentMatch } = this.props;
    let recentMatchCardList;
    let loss = 0;
    let win = 0;
    if (recentMatch) {
      recentMatch.forEach((ele) => {
        if (ele.match_status === "Lost") {
          loss++;
        } else {
          win++;
        }
      });

      recentMatchCardList = recentMatch.map((ele) => (
        <LastMatchCard
          onEvent={this.handleEvent}
          key={ele.id}
          recentMatch={ele}
        />
      ));
    }
    return (
      <div>
        <div className="lossWin">
          <span style={{ color: "red" }}>Lost</span> {loss} ,
          <span style={{ color: "green" }}>Won</span> {win}
        </div>
        <div className="lastMatchCardContainer">{recentMatchCardList}</div>
      </div>
    );
  }
}

export default LastMatchCards;
