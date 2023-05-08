import React from "react";
import "./App.css";
import Container from "./Components/container";
import TeamMatch from "./Components/TeamMatches/teammatchContainer";
import PageNotFound from "./Components/PageNotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isChanged: "" };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Container} />
            <Route exact path="/team/:id" component={TeamMatch} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
