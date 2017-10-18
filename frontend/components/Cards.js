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
  query allCards($first: Int!, $skip: Int!) {
    allCards(orderBy: title_ASC, first: $first, skip: $skip) {
      id
      title
      link
    }
    _allCardsMeta {
      count
    }
  }
`;

const POSTS_PER_PAGE = 100;

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allCards, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allCards.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allCards: [...previousResult.allCards, ...fetchMoreResult.allCards]
          });
        }
      });
    }
  })
})(Cards);
