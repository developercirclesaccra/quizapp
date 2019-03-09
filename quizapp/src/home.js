import React from 'react';
import { Image, Card, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Content from "./content";

const Home = props => {
  if (Array.isArray(props.topics) && props.topics.length) {
    return (
      <Content>
        <Segment basic>
          <Header as="h3" textAlign="center">Choose a topic to test your knowledge</Header>
          <Card.Group centered>
            {
              props.topics.map(topic => {
                return (
                  <Card key={topic.id} as={Link} to={`/quiz/${topic.slug}`}>
                    <Card.Content>
                      <Image size="mini" src={topic.image} floated="right" />
                      <Card.Header>{topic.topic}</ Card.Header>
                      <Card.Meta>{topic.description}</ Card.Meta>
                    </ Card.Content>
                  </ Card>
                )
              })
            }
          </Card.Group>
        </Segment>
      </Content>
     
    )
  } else {
    return (
      <Content>
        <Segment basic>
          <Header as="h3" textAlign="center">
            Sorry, there are no quiz topics to display at the moment!
          </Header>
        </Segment>
      </Content>
    );
  }
}

export default Home;