import React from "react";
import "./teamCard.css";
import Card from "./card";
import { Link } from "react-router-dom";

class TeamCard extends React.Component {
  constructor() {
    super();
    this.state = { TeamList: [] };
  }
  getDataByFetch = async () => {
    const response = await fetch("https://apis.ccbp.in/ipl");
    const Data = await response.json();
    const updatedData = Data.teams.map((ele) => {
      return { name: ele.name, id: ele.id, teamImgUrl: ele.team_image_url };
    });

    this.setState({ TeamList: updatedData });
  };

  componentDidMount = () => {
    this.getDataByFetch();
  };

  render() {
    const teamsCardList = this.state.TeamList.map((ele) => (
      <Link to={`/team/${ele.id}`} style={{ textDecoration: "none" }}>
        <Card key={ele.id} name={ele.name} teamImgUrl={ele.teamImgUrl} />
      </Link>
    ));

    return <div className="teamsCardContainer">{teamsCardList}</div>;
  }
}
export default TeamCard;
