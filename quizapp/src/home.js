import React from 'react';
import { Image, Card, Header } from "semantic-ui-react";

const topics = [
  {
    header: "Linux Commands",
    image: "https://i.postimg.cc/ZR8CP8KL/logo-terminal.png",
    description: "How much Linux power do you wield?"
  },
  {
    header: "Git",
    image: "https://i.postimg.cc/DwNJ7fM1/logo-git.png",
    description: "Test yourself on the most popular version control system"
  },
  {
    header: "HTML",
    image: "https://i.postimg.cc/cHyv89ZH/logo-html.png",
    description: "Do you know the standard markup language for the web?"
  },
  {
    header: "CSS",
    image: "https://i.postimg.cc/fb03y4Gp/logo-css.png",
    description: "How's your style?"
  },
  {
    header: "JavaScript",
    image: "https://i.postimg.cc/8zcf8ft1/logo-javascript.png",
    description: "Show off the programming language of HTML and the Web"
  },
  {
    header: "Python",
    image: "https://i.postimg.cc/sx31TMMC/logo-python.png",
    description: "You think you know some Python?"
  }
];

export default Home => {
  return (
    <div>
      <Header as="h3" textAlign="center">Choose a topic to test your knowledge</Header>

      <Card.Group centered>
        {
          topics.map((topic, index) => {
            return (
              <Card key={index}>
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
}