import React from "react";
import { Menu, Header } from "semantic-ui-react";

export default Navbar => {
  return (
    <Menu borderless inverted>
      <Menu.Item>
        <Header as="h2" inverted>DevQuiz</Header>
      </Menu.Item>
    </Menu>
  )
}