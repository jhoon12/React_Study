import React, { Component } from "react";

class a extends Component {
  render() {
    this.state = {
        first : 0,
        last : 0
    };
    return <div>{first} * {last}</div>;
  }
}
