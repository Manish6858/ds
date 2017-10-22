import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div style={styles.CardWrapper}>
        <a href={this.props.link} target="_blank" style={styles.LinkWrapper}>
          {this.props.title}
        </a>
      </div>
    );
  }
}

const styles = {
  CardWrapper: {
    border: "1px dashed #999",
    width: 200
  },
  LinkWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    padding: 20,
    color: "#4087c4"
  }
};
