import React, { Component } from "react";

export default class extends Component {
  render() {
    const { title, style, onClick } = this.props;
    return (
      <button onClick={onClick} style={style}>
        {title}
      </button>
    );
  }
}
