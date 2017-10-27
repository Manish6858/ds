import React, { Component } from "react";
import Head from "next/head";

import Layout from "../components/Layout";

export default class extends Component {
  static async getInitialProps({ query }) {
    // Card is not available on query means this is not a static export, see next.config.js
    // This is rendering on server side, we only have ID, need to fetch the card
    if (!query.card) {
      // TODO: Unify lokka interface across project
      const Lokka = require("lokka").Lokka;
      const Transport = require("lokka-transport-http").Transport;

      const client = new Lokka({
        transport: new Transport("https://api.graph.cool/simple/v1/ds")
      });

      // TODO: Handle error condition
      query.card = await client
        .query(
          `
            query allCards {
              allCards(orderBy: title_ASC, filter: { key: "${query.profile}" }) {
                id
                key
                title
                link
              }
              _allCardsMeta {
                count
              }
            }`
        )
        .then(result => {
          return result.allCards[0];
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
          <style jsx>{`
            .profile-page {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}
