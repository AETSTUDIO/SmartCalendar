import React, { Component } from "react";
import { Divider, Header, Container } from "semantic-ui-react";
import Menubar from "../MenuBar/MenuBar";

class SmartCalender extends Component {
  componentDidMount(){

  }

  render() {
    return (
      <React.Fragment>
        <Menubar />
        <Divider hidden />
        <Container>{this.props.children}</Container>
      </React.Fragment>
    );
  }
}

export default SmartCalender;
