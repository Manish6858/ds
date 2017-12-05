import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="headeLine">Divyendu Singh</div>
        <div className="aboutMe">
          A young computer scientist from the top of India, the beautiful place
          called Jammu and Kashmir. I love making stuff, things that change the
          way the world operates, things that affect the space-time of the
          universe, things that have an impact.
        </div>
        <div className="imageWrapper">
          <img
            className="profilePic"
            alt=""
            src="https://pbs.twimg.com/profile_images/843476376971755520/yFWFjc8W_400x400.jpg"
          />
        </div>
        <style jsx>{`
          .headeLine {
            display: flex;
            justify-content: center;
            alignitems: center;
            font-family: "Open Sans";
            font-size: 72px;
            font-weight: 100;
            color: #aaa;
            padding-top: 150px;
          }
          .aboutMe {
            display: flex;
            text-align: center;
            justify-content: center;
            alignitems: center;
            font-family: "Open Sans";
            font-size: 18px;
            width: 900px;
            font-weight: 100;
            color: #999;
            margin: auto;
            padding: 12px;
          }
          .profilePic {
            border: 5px solid #434343;
            border-radius: 50%;
            height: 150px;
            width: 150px;
            filter: saturate(3%) brightness(120%);
          }
          .imageWrapper {
            padding: 20px;
            display: flex;
            justify-content: center;
            alignitems: center;
          }
        `}</style>
      </div>
    );
  }
}
