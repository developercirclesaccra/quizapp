import React from "react";
import Navbar from "./navbar";
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
        <Navbar />
        <Home />
      </div>
    );
  }
}
