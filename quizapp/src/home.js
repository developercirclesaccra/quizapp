import React from 'react';
import { Image, Card, Header, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { GridSize } from "./utils";

const Home = props => {
  if (Array.isArray(props.topics) && props.topics.length) {
    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Segment basic></Segment>
        </Grid.Column>
        <Grid.Column width={GridSize}>
          <Segment basic>
            <Header as="h3" textAlign="center">Choose a topic to test your knowledge</Header>

            <Card.Group centered>
              {
                props.topics.map((topic, index) => {
                  return (
                    <Card key={index} as={Link} to="/quiz">
                      <Card.Content>
                        <Image size="mini" src={topic.image} floated="right" />
                        <Card.Header>{topic.header}</ Card.Header>
                        <Card.Meta>{topic.description}</ Card.Meta>
                      </ Card.Content>
                    </ Card>
                  )
                })
              }
            </Card.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic></Segment>
        </Grid.Column>
      </Grid>
      
     
    )
  } else {
    return (
      <Grid columns='equal'>
        <Grid.Column>
          <Segment basic></Segment>
        </Grid.Column>
        <Grid.Column width={8}>
          <Segment basic>
            <Header as="h3" textAlign="center">
              Sorry, there are no quiz topics to display at the moment!
            </Header>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment basic></Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Home;