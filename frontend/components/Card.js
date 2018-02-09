import React, { Component } from "react";

export default class extends Component {
  render() {
    const { slug, title, link, html } = this.props.card;
    return (
      <div className="CardWrapper">
        <a href={`/profile/${slug}`} target="_self" className="LinkWrapper">
          {title}
        </a>
        <style jsx>{`
          .CardWrapper {
            border: 1px dashed #545454;
            min-width: 320px;
            max-width: 400px;
          }
          .LinkWrapper {
            display: flex;
            justify-content: center;
            alignitems: center;
            text-decoration: none;
            padding: 20px;
            font-size: 16px;
            color: #a6925a;
            transition: 120ms ease-in background;
          }
          .LinkWrapper:hover {
            background: #222;
            color: #e5bf55;
          }
        `}</style>
      </div>
    );
  }
}
