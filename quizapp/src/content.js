import React from 'react';
import { Grid, Segment } from "semantic-ui-react";

const Content = props => {
 
  return (
    <Grid columns='equal'>
      <Grid.Column mobile={1}>
        <Segment basic></Segment>
      </Grid.Column>
      <Grid.Column mobile={14}>
        {props.children}
      </Grid.Column>
      <Grid.Column mobile={1}>
        <Segment basic></Segment>
      </Grid.Column>
    </Grid>
  );
}

export default Content;