import React, { Component } from "react";

class Input extends Component {
  render() {
    const { label, type, value, onChange } = this.props;
    return (
      <div>
        <span className="label">{label}</span>
        <input
          className="input"
          type={type}
          value={value}
          onChange={onChange}
        />
        <style jsx>{`
          .label {
            border: 1px solid #545454;
            font-size: 18px;
            line-height: 18px;
            height: 24px;
          }
          .input {
            border: 1px solid #545454;
            font-size: 18px;
            line-height: 18px;
            height: 24px;
          }
          .input:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
