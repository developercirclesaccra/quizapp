import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Question from "./question";

import topics from "../src/topics";

export default class DevQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: topics
    };
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <Route
            exact
            path="/"
            render={props => <Home {...props} 
              topics={this.state.topics} />}
          />
          <Route
            path="/quiz"
            component={Question}
          />
        </div>
      </HashRouter>
    );
  }
}
