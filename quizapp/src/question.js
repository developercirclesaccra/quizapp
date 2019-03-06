import React from "react";
import { Header, Grid, Segment, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { GridSize } from "./utils";

import options from "./sample/options";
import questions from "./sample/que";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {},
      options: [],
      quizSession: ""
    }
  }

  componentDidMount() {
    // console.log("slug", this.props.match.params.slug);
    // console.log('all questions', questions);
    // console.log("all options", options);
    this.getQuestionOptions(this.props.match.params.slug);
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
  // const slug = props.match.params.slug;
  render() {
    if (this.state.question !== undefined) {
      return (
        <Grid columns="equal">
          <Grid.Column>
            <Segment basic />
          </Grid.Column>
          <Grid.Column width={GridSize}>
            <Segment basic>
              <Segment basic clearing>
              <Header as="h3" floated="left">
                {this.state.question.topic}
              </Header>
              <Header as="h3" floated="right">
                timer
              </Header>
              </Segment>
              <Header as="h4" textAlign="center">
                {this.state.question.question}
              </Header>
              <Segment basic>
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
          </Grid.Column>
          <Grid.Column>
            <Segment basic />
          </Grid.Column>
        </Grid>
      );
    } else {
      return (
        <Grid columns="equal">
          <Grid.Column>
            <Segment basic />
          </Grid.Column>
          <Grid.Column width={GridSize}>
            <Segment basic>
              <Header as="h3" textAlign="center">
                Sorry, there are no questions for this topic at this time.
              </Header>
              
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic />
          </Grid.Column>
        </Grid>
      );
    }
  }
};

export default Question;