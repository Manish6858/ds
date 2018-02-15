import React, { Component } from "react";

import Button from "./Button";

export default class extends Component {
  render() {
    const { card, editing, onClick, deleteCard } = this.props;
    const { id, slug, title, link, html } = card;
    return (
      <div className="CardWrapper">
        {!editing && (
          <a href={`/profile/${slug}`} target="_self" className="LinkWrapper">
            {title}
          </a>
        )}
        {editing && (
          <a
            href="#"
            onClick={() => {
              onClick(card);
            }}
            target="_self"
            className="LinkWrapper"
          >
            {title}
          </a>
        )}
        {editing && (
          <Button
            title="x"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "none",
              border: "none",
              color: "white",
              fontSize: 20
            }}
            onClick={() => {
              const r = confirm("Delete the card?");
              if (r) {
                deleteCard(id);
              }
            }}
          />
        )}
        <style jsx>{`
          .CardWrapper {
            position: relative;
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
