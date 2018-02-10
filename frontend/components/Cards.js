import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Card from "./Card";

class Cards extends Component {
  render() {
    if (this.props.data.error) {
      console.log(this.props.data.error);
      return null;
    }
    if (this.props.data.loading) {
      return "Loading...";
    }
    return (
      <div className="CardsLayoutWrapper">
        {this.props.data.cards.map(card => (
          <div key={card.slug} className="CardsChildWrapper">
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

const cards = gql`
  query AllCardsForHome {
    cards(orderBy: title_ASC) {
      id
      slug
      title
      link
      html
    }
  }
`;

export default graphql(cards, {
  options: {
    variables: {}
  },
  props: ({ data }) => ({
    data
  })
})(Cards);
