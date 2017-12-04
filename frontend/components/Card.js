import React, { Component } from "react";

export default class extends Component {
  render() {
    const { title, link, key } = this.props.card;
    return (
      <div className="CardWrapper">
        <a href={`/profile/${key}`} target="_self" className="LinkWrapper">
          {title}
        </a>
        <style jsx>{`
          .CardWrapper {
            border: 1px dashed #545454;
            width: 200px;
          }
          .LinkWrapper {
            display: flex;
            justify-content: center;
            alignitems: center;
            text-decoration: none;
            padding: 20px;
            font-size: 16px;
            color: #a6925a;
          }
        `}</style>
      </div>
    );
  }
}
