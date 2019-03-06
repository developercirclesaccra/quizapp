import React from 'react';
import { Image, Card, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = props => {
  if (Array.isArray(props.topics) && props.topics.length) {
    return (
      <div>
      
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
      </div>
    )
  } else {
    return (
      <Header as="h3" textAlign="center">
        Sorry, there are no quiz topics to display at the moment!
      </Header>
    );
  }
}

export default Home;