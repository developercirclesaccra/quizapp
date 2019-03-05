import React from "react";
import Header from "./header";
import Home from "./home";

export default class DevQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        topic: ""
      }
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}
