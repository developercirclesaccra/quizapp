import React from 'react';
import { Button, Statistic, Header, Segment, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Content from "./content";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.match.params.topic,
      wrongAnswers: "3",
      rightAnswers: "12",
      numberOfQuestions: ""
    }
  }

  handleNewQuiz = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  }

  render() {
    console.log('topic', this.state.topic);
    return (
      <Content>
        <Segment basic>
          <Header as="h3" textAlign="center">
            Here's how you performed in <Label content={this.state.topic} color="blue"/>
          </Header>
          <Statistic.Group horizontal align-items="center">
            <Statistic>
              <Statistic.Value>{this.state.rightAnswers}</Statistic.Value>
              <Statistic.Label>
                <Icon name="check" size="big" color="green" />
              </Statistic.Label>
            </Statistic>
            <Statistic float="right">
              <Statistic.Value>{this.state.wrongAnswers}</Statistic.Value>
              <Statistic.Label>
                <Icon name="close" size="big" color="red" />
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Segment>
        <Segment basic textAlign="center">
          <Button color="grey" onClick={this.handleNewQuiz} >Take another quiz</Button>
        </Segment>
      </Content>
    );
  }
}

export default Result;