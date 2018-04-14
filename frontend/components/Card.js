import React, { Component } from "react";
import cx from "classnames";

import Button from "./Button";

export default class extends Component {
  render() {
    const { card, editing, onClick, onCrossClick } = this.props;
    const { id, slug, title, link, html } = card;
    return (
      <div className={cx("CardWrapper", { ["editing"]: editing })}>
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
            style={{
              position: "absolute",
              top: "4px",
              right: 0,
              background: "none",
              border: "none",
              color: "white",
              fontSize: 20
            }}
            onClick={onCrossClick}
          >
            x
          </Button>
        )}
        <style jsx>{`
          .CardWrapper {
            position: relative;
            border: 1px solid #545454;
            min-width: 320px;
            max-width: 400px;
          }
          .editing {
            border: 1px dashed #545454;
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
          .LinkWrapper:focus {
            outline: none;
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
