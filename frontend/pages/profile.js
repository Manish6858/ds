import React, { Component } from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import { GraphQLClient } from "graphql-request";

export default class extends Component {
  static async getInitialProps({ query }) {
    // Card is not available on query means this is not a static export, see next.config.js
    // This is rendering on server side, we only have ID, need to fetch the card
    if (!query.card) {
      const client = new GraphQLClient("https://api.divyendusingh.com"); // TODO: make it come from configuration
      // TODO: Handle error condition
      query.card = await client
        .request(
          `
            query AllCardsForProfile {
              cards(orderBy: title_ASC, where: { slug: "${query.profile}" }) {
                id
                slug
                title
                link
                html
              }
            }
          `
        )
        .then(result => {
          return result.cards[0];
        });
    }
    return { card: query.card };
  }

  componentDidMount() {
    // The delay is intentional to show the redirect message
    setTimeout(() => {
      window.location.href = this.props.card.link;
    }, 100);
  }

  render() {
    return (
      <Layout>
        <div className="profile-page">
          <Head>
            <title>{this.props.card.title}</title>
          </Head>
          Redirecting to {this.props.card.link}
          <style jsx>
            {`
              .profile-page {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}
