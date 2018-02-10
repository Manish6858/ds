import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

class About extends Component {
  render() {
    const { data } = this.props;
    if (data.error) {
      console.log(data.error);
      return null;
    }
    if (data.loading) {
      return "Loading...";
    }

    return (
      <div className="aboutWrapper">
        <div className="headeLine">{data.user.name}</div>
        <div className="aboutMe">{data.user.intro}</div>
        <div className="imageWrapper">
          <img className="profilePic" alt="" src={data.user.image} />
        </div>

        <style jsx>{`
          .headeLine {
            text-align: center;
            font-family: "Open Sans";
            font-size: 72px;
            font-weight: 100;
            color: #aaa;
            padding-top: 10%;
          }
          .aboutMe {
            text-align: center;
            font-family: "Open Sans";
            font-size: 18px;
            max-width: 900px;
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

const user = gql`
  query GetUserForHome {
    user(where: { slug: "divyenduz" }) {
      id
      slug
      name
      intro
      image
    }
  }
`;

export default graphql(user, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(About);
