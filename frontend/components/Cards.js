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
          <div style={styles.CardsChildWrapper}>
            <Card title={card.title} link={card.link} />
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
      title
      link
    }
    _allCardsMeta {
      count
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
