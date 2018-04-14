import React, { Component } from "react";
import { gql, graphql, compose } from "react-apollo";
import Modal from "react-modal";
import cx from "classnames";

import Card from "./Card";
import Button from "./Button";

class Cards extends Component {
  state = {
    newCard: {}
  };

  render() {
    const { editing, data, createCard, updateCard, deleteCard } = this.props;
    if (data.error) {
      console.log(data.error);
      return null;
    }
    if (data.loading) {
      return "Loading...";
    }
    return (
      <div className={cx({ ["editing"]: editing })}>
        {editing && (
          <Button
            onClick={() => {
              this.setState(prevState => {
                return {
                  newCard: {
                    ...prevState.newCard,
                    ...{
                      id: "new",
                      type: "LINK",
                      title: null,
                      slug: null,
                      link: null,
                      html: null
                    }
                  }
                };
              });
            }}
          >
            + Add New
          </Button>
        )}
        <div className="CardsLayoutWrapper">
          {data.cards.map(card => (
            <div key={card.slug} className="CardsChildWrapper">
              <Card
                card={card}
                editing={editing}
                onClick={card => {
                  console.log(card);
                  this.setState(prevState => {
                    return {
                      newCard: {
                        ...prevState.newCard,
                        ...card
                      }
                    };
                  });
                }}
                onCrossClick={async () => {
                  const r = confirm("Delete the card?");
                  if (r) {
                    const deleteCardResponse = await deleteCard({
                      variables: {
                        id: card.id
                      }
                    });
                    console.log(deleteCardResponse);
                  }
                }}
              />
            </div>
          ))}
          <Modal
            isOpen={
              editing &&
              typeof this.state.newCard.id === "string" &&
              this.state.newCard.type === "LINK"
            }
          >
            Title:{" "}
            <input
              type="text"
              value={this.state.newCard.title}
              onChange={e => {
                e.persist();
                this.setState(prevState => {
                  return {
                    newCard: {
                      ...prevState.newCard,
                      ...{
                        title: e.target.value
                      }
                    }
                  };
                });
              }}
            />
            Slug:{" "}
            <input
              type="text"
              value={this.state.newCard.slug}
              onChange={e => {
                e.persist();
                this.setState(prevState => {
                  return {
                    newCard: {
                      ...prevState.newCard,
                      ...{
                        slug: e.target.value
                      }
                    }
                  };
                });
              }}
            />
            Link:{" "}
            <input
              type="text"
              value={this.state.newCard.link}
              onChange={e => {
                e.persist();
                this.setState(prevState => {
                  return {
                    newCard: {
                      ...prevState.newCard,
                      ...{
                        link: e.target.value
                      }
                    }
                  };
                });
              }}
            />
            <button
              disabled={
                typeof this.state.newCard.id === "string" &&
                this.state.newCard.title &&
                this.state.newCard.slug &&
                this.state.newCard.link &&
                this.state.newCard.type
                  ? false
                  : true
              }
              onClick={async () => {
                const mutationFunction =
                  this.state.newCard.id === "new" ? createCard : updateCard;
                const createCardResponse = await mutationFunction({
                  variables: {
                    ...this.state.newCard
                  }
                });
                console.log(createCardResponse);
                if (createCardResponse) {
                  this.setState({ newCard: {} });
                }
              }}
            >
              {this.state.newCard.id === "new" ? "Create" : "Edit"}
            </button>
            <button
              onClick={() => {
                this.setState({ newCard: {} });
              }}
            >
              x
            </button>
          </Modal>
        </div>
        <style jsx>{`
          .CardsLayoutWrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 60%;
            margin: 0 auto;
          }
          .CardsChildWrapper {
            margin: 10px;
          }
          .editing {
            border: 1px dashed #545454;
          }
        `}</style>
      </div>
    );
  }
}

const ALL_CARDS_QUERY = gql`
  query AllCardsForHome {
    cards(orderBy: title_ASC) {
      id
      type
      slug
      title
      link
      html
    }
  }
`;

const CREATE_CARD_MUTATION = gql`
  mutation CreateCard(
    $type: CardType!
    $slug: String!
    $title: String!
    $link: String
    $html: String
  ) {
    createCard(
      data: {
        type: $type
        slug: $slug
        title: $title
        link: $link
        html: $html
      }
    ) {
      id
      type
      slug
      title
      link
      html
    }
  }
`;

const UPDATE_CARD_MUTATION = gql`
  mutation UpdateCard(
    $id: ID!
    $type: CardType!
    $slug: String!
    $title: String!
    $link: String
    $html: String
  ) {
    updateCard(
      where: { id: $id }
      data: {
        type: $type
        slug: $slug
        title: $title
        link: $link
        html: $html
      }
    ) {
      id
      type
      slug
      title
      link
      html
    }
  }
`;

const DELETE_CARD_MUTATION = gql`
  mutation DeleteCard($id: ID!) {
    deleteCard(where: { id: $id }) {
      id
      type
      slug
      title
      link
      html
    }
  }
`;

export default compose(
  graphql(ALL_CARDS_QUERY, {
    options: {
      variables: {}
    },
    props: ({ data }) => ({
      data
    })
  }),
  graphql(CREATE_CARD_MUTATION, {
    name: "createCard",
    options: {
      refetchQueries: [
        {
          query: ALL_CARDS_QUERY,
          variables: {}
        }
      ]
    }
  }),
  graphql(UPDATE_CARD_MUTATION, {
    name: "updateCard",
    options: {
      refetchQueries: [
        {
          query: ALL_CARDS_QUERY,
          variables: {}
        }
      ]
    }
  }),
  graphql(DELETE_CARD_MUTATION, {
    name: "deleteCard",
    options: {
      refetchQueries: [
        {
          query: ALL_CARDS_QUERY,
          variables: {}
        }
      ]
    }
  })
)(Cards);
