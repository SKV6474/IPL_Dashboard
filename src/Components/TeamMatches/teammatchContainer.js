import React from "react";
import TeamMatchColor from "./teammatch";
import PageNotFound from "../PageNotFound";
import { Route } from "react-router-dom";

class TeamMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teamMatchList: [], isFound: false };
  }

  handleEvent = async (Id) => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${Id}`);
    const Data = await response.json();
    if (Data.error_message !== "Please Select Valid Team") {
      this.setState({ teamMatchList: Data, idFound: true });
    } else {
      this.setState({ idFound: false });
    }
  };

  componentDidMount = () => {
    this.getDataOfTeamMatch();
  };

  getDataOfTeamMatch = async () => {
    const id = this.props.match.params.id;
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`);
    const Data = await response.json();
    if (Data.error_message !== "Please Select Valid Team") {
      this.setState({ teamMatchList: Data, idFound: true });
    } else {
      this.setState({ idFound: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.teamMatchList.length !== 0 ? (
          <TeamMatchColor
            onEvent={this.handleEvent}
            teamMatchList={this.state.teamMatchList}
            id={this.props.match.params.id}
          />
        ) : (
          <Route path="*" component={PageNotFound} />
        )}
      </div>
    );
  }
}

export default TeamMatch;
