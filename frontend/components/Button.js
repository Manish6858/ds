import React, { Component } from "react";

export default class extends Component {
  render() {
    const { children, style, onClick } = this.props;
    return (
      <button onClick={onClick} style={style} className="btn">
        {children}
        <style jsx>{`
          .btn {
            display: block;
            margin: 5px auto;
            background: transparent;
            color: white;
            padding: 7px;
            cursor: pointer;
          }
          .btn:focus {
            outline: none;
          }
        `}</style>
      </button>
    );
  }
}
