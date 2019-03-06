import React from "react";
import { Header, Grid, Segment } from "semantic-ui-react";
import { GridSize } from "./utils";

export default Question => {
  return (
    <Grid columns='equal'>
      <Grid.Column>
        <Segment basic></Segment>
      </Grid.Column>
      <Grid.Column width={GridSize}>
        <Segment basic>
          <Header as="h3" textAlign="center">
            Question
          </Header>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic></Segment>
      </Grid.Column>
    </Grid>
  );
};
