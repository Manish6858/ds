import React, { Component } from "react";

export default class extends Component {
  render() {
    const { title, link, key } = this.props.card;
    return (
      <div style={styles.CardWrapper}>
        <a href={`/profile/${key}`} target="_self" style={styles.LinkWrapper}>
          {title}
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
