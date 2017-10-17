import React, { Component } from "react";

export default class extends Component {
  render() {
    return <div style={styles.LayoutWrapper}>{this.props.children}</div>;
  }
}

const styles = {
  LayoutWrapper: {
    display: "flex",
    justifyContent: "center"
  }
};
