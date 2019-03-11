import React from "react";
import { Header, Grid, Segment, Card, Progress } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import Content from "./content";

import options from "./sample/options";
import questions from "./sample/que";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      options: [],
      quizSession: "",
      timeRemaining: 10
    }
  }

  componentDidMount() {
    // console.log("slug", this.props.match.params.slug);
    // console.log('all questions', questions);
    // console.log("all options", options);
    this.getQuestionOptions(this.props.match.params.slug);
    this.timer = setInterval(this.countDown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  getQuestionOptions = topicSlug => {
    const topicQuestions = questions.filter(question => question.topic_slug === topicSlug);
    const question = topicQuestions[Math.floor(Math.random() * topicQuestions.length)];
    this.setState({ question });
    // console.log('question', question);
    if (question) {
      const optionSet = options.filter(
        option => option.question === question.id
      );
      // console.log('optionSet', optionSet);
      this.setState({ options: optionSet });
    }
  }

  countDown = () => {
    if (this.state.timeRemaining > 0) {
      this.setState({ timeRemaining: this.state.timeRemaining - 1 });
    } else {
      clearInterval(this.timer);
      // window.location.reload();
      // move to next question
      this.props.history.push(`/result/${this.state.question.topic}`);
    }
  }
  
  
  render() {
    if (this.state.question !== undefined) {
      return (
        <Content>
          <Segment basic>
            <Segment basic clearing>
              <Header as="h3" floated="left">
                {this.state.question.topic}
              </Header>

              <Header as="h3" floated="right">
                {this.state.timeRemaining}
              </Header>
            </Segment>
            <Header as="h4" textAlign="center">
              {this.state.question.question}
            </Header>
            <Segment basic>
              <Progress
                percent={this.state.timeRemaining * 10}
                indicating
                attached="bottom"
              />
              <Card.Group itemsPerRow={1}>
                {this.state.options.map(option => {
                  return (
                    <Card as={Link} to="/quiz" key={option.id}>
                      <Card.Content as="p" textAlign="center">
                        {option.option}
                      </Card.Content>
                    </Card>
                  );
                })}
              </Card.Group>
            </Segment>
          </Segment>
        </Content>
      );
    } else {
      return (
        <Content>
            <Segment basic>
              <Header as="h3" textAlign="center">
                Sorry, there are no questions for this topic at this time.
              </Header>
              
          </Segment>
          </Content>
      );
    }
  }
};

export default Question;