import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";

import Dropzone from "react-dropzone";

class About extends Component {
  state = {
    image: null
  };
  render() {
    const { editing, data, update } = this.props;

    if (data.error) {
      console.log(data.error);
      return null;
    }
    if (data.loading) {
      return "Loading...";
    }

    return (
      <div className="aboutWrapper">
        <div
          ref={el => {
            this.nameEl = el;
          }}
          className="headerLine"
          contentEditable={editing}
        >
          {data.user.name}
        </div>
        <div
          ref={el => {
            this.introEl = el;
          }}
          className="aboutMe"
          contentEditable={editing}
        >
          {data.user.intro}
        </div>
        <div className="imageWrapper">
          <Dropzone
            disabled={!editing}
            style={{ border: 0 }}
            multiple={false}
            accept="image/*"
            onDrop={acceptedFiles => {
              acceptedFiles.forEach(file => {

		this.setState({
			image: file.preview
		})

                var formData = new FormData();
                formData.append("data", file);
                const response = fetch("https://api.divyendusingh.com/upload", {
                  method: "POST",
                  body: formData
                });
                console.log(
                  response
                    .then(response => {
                      return response.json();
                    })
                    .then(response => {
                      console.log(response.url);
                      this.setState({
                        image: response.url
                      });
                    })
                );
              });
            }}
          >
            <img
              className="profilePic"
              alt=""
              src={this.state.image || data.user.image}
            />
          </Dropzone>
        </div>

        {editing && (
          <button
            onClick={() => {
              const updateResponse = update({
                variables: {
                  name: this.nameEl.innerText,
                  intro: this.introEl.innerText,
                  image: this.state.image || data.user.image
                }
              });
              if (updateResponse) {
                data.refetch();
              } else {
                console.log("Update fail");
              }
            }}
          >
            Save Changes
          </button>
        )}

        <style jsx>{`
          .headerLine {
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

const ALL_QUERY = gql`
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

// const CREATE_MUTATION = gql``;

const UPDATE_MUTATION = gql`
  mutation UpdateUser($name: String!, $intro: String!, $image: String!) {
    updateUser(
      where: { slug: "divyenduz" }
      data: { name: $name, intro: $intro, image: $image }
    ) {
      id
      slug
      name
      intro
      image
    }
  }
`;

// const DELETE_MUTATION = gql``;

export default compose(
  graphql(ALL_QUERY, {
    options: {
      variables: {}
    },
    props: ({ data }) => ({
      data
    })
  }),
  // graphql(CREATE_MUTATION, {
  //   name: "create"
  // }),
  graphql(UPDATE_MUTATION, {
    name: "update"
  })
  // graphql(DELETE_MUTATION, {
  //   name: "remove"
  // })
)(About);
