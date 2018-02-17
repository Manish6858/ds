import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";
import Modal from "react-modal";

class Scripts extends Component {
  state = {
    new: {}
  };
  render() {
    const { editing, data, create, update, remove } = this.props;
    if (data.error) {
      console.log(data.error);
      return null;
    }
    if (data.loading) {
      return null;
    }
    if (!editing) {
      // TODO: This means scripts won't work on admin panel
      // Things like Fullstory won't work. Ponder.
      return data.scripts.map(item => (
        <script
          key={item.id}
          dangerouslySetInnerHTML={{
            __html: item.script
          }}
        />
      ));
    }
    return (
      <div>
        {editing && (
          <button
            onClick={() => {
              this.setState(prevState => {
                return {
                  new: {
                    ...prevState.new,
                    ...{
                      id: "new",
                      location: "HEADER",
                      slug: null,
                      script: null
                    }
                  }
                };
              });
            }}
          >
            + Add Script
          </button>
        )}
        {data.scripts.map(item => (
          <div
            style={{
              border: "1px dashed #545454",
              minWidth: 320,
              maxWidth: 400,
              padding: 10,
              margin: 5
            }}
            key={item.id}
          >
            <button
              onClick={() => {
                this.setState(prevState => {
                  return {
                    new: {
                      ...prevState.new,
                      ...item
                    }
                  };
                });
              }}
            >
              {item.slug}
            </button>
            <button
              onClick={async () => {
                const deleteResponse = await remove({
                  variables: {
                    id: item.id
                  }
                });
                if (deleteResponse) {
                  data.refetch();
                } else {
                  console.log("Delete fail");
                }
              }}
            >
              X
            </button>
          </div>
        ))}
        <Modal
          isOpen={
            editing &&
            typeof this.state.new.id === "string" &&
            this.state.new.location === "HEADER"
          }
        >
          Script:
          <textarea
            rows={20}
            cols={50}
            type="text"
            value={this.state.new.script}
            onChange={e => {
              e.persist();
              this.setState(prevState => {
                return {
                  new: {
                    ...prevState.new,
                    ...{
                      script: e.target.value
                    }
                  }
                };
              });
            }}
          />
          Slug:
          <input
            type="text"
            value={this.state.new.slug}
            onChange={e => {
              e.persist();
              this.setState(prevState => {
                return {
                  new: {
                    ...prevState.new,
                    ...{
                      slug: e.target.value
                    }
                  }
                };
              });
            }}
          />
          <button
            disabled={
              typeof this.state.new.id === "string" &&
              this.state.new.script &&
              this.state.new.slug &&
              this.state.new.location
                ? false
                : true
            }
            onClick={async () => {
              const mutationFunction =
                this.state.new.id === "new" ? create : update;
              const createResponse = await mutationFunction({
                variables: {
                  ...this.state.new
                }
              });
              console.log(createResponse);
              if (createResponse) {
                data.refetch();
                this.setState({ new: {} });
              } else {
                console.log("Create fail");
              }
            }}
          >
            {this.state.new.id === "new" ? "Create" : "Edit"}
          </button>
          <button
            onClick={() => {
              this.setState({ new: {} });
            }}
          >
            x
          </button>
        </Modal>
      </div>
    );
  }
}

const ALL_QUERY = gql`
  query AllScripts {
    scripts(where: { location: HEADER }) {
      id
      location
      slug
      script
    }
  }
`;

const CREATE_MUTATION = gql`
  mutation CreateScript($slug: String!, $script: String!) {
    createScript(data: { location: HEADER, slug: $slug, script: $script }) {
      id
      location
      slug
      script
    }
  }
`;

const UPDATE_MUTATION = gql`
  mutation UpdateScript($id: ID!, $slug: String!, $script: String!) {
    updateScript(where: { id: $id }, data: { slug: $slug, script: $script }) {
      id
      location
      slug
      script
    }
  }
`;

const DELETE_MUTATION = gql`
  mutation DeleteScript($id: ID!) {
    deleteScript(where: { id: $id }) {
      id
      location
      slug
      script
    }
  }
`;

export default compose(
  graphql(ALL_QUERY, {
    options: {
      variables: {}
    },
    props: ({ data }) => ({
      data
    })
  }),
  graphql(CREATE_MUTATION, {
    name: "create"
  }),
  graphql(UPDATE_MUTATION, {
    name: "update"
  }),
  graphql(DELETE_MUTATION, {
    name: "remove"
  })
)(Scripts);
