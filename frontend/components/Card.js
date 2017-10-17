import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div
        onClick={() => window.open(this.props.link, "_target")}
        style={styles.CardWrapper}
      >
        {this.props.title}
      </div>
    );
  }
}

const styles = {
  CardWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed #999",
    width: 200,
    padding: 20,
    cursor: "pointer"
  }
};
