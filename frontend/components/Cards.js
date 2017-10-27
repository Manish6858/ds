import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Card from "./Card";

class Cards extends Component {
  render() {
    if (this.props.data.loading) {
      return "Loading...";
    }
    return (
      <div style={styles.CardsLayoutWrapper}>
        {this.props.data.allCards.map(card => (
          <div key={card.key} style={styles.CardsChildWrapper}>
            <Card card={card} />
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  CardsLayoutWrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "60%",
    margin: "0 auto"
  },
  CardsChildWrapper: {
    margin: 10
  }
};

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
