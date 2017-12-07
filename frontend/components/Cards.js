import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Card from "./Card";

class Cards extends Component {
  render() {
    if (this.props.data.loading) {
      return "Loading...";
    }
    return (
      <div className="CardsLayoutWrapper">
        {this.props.data.allCards.map(card => (
          <div key={card.key} className="CardsChildWrapper">
            <Card card={card} />
          </div>
        ))}
        <style jsx>{`
          .CardsLayoutWrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 60%;
            margin: 0 auto;
            padding: 40px;
          }
          .CardsChildWrapper {
            margin: 10px;
          }
        `}</style>
      </div>
    );
  }
}

const allCards = gql`
  query allCards {
    allCards(orderBy: title_ASC) {
      id
      key
      title
      link
    }
  }
`;

export default graphql(allCards, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(Cards);
