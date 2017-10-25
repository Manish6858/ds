import React, { Component } from "react";
import Head from "next/head";

export default class extends Component {
  static async getInitialProps({ query }) {
    return { card: query.card };
  }

  componentDidMount() {
    window.location.href = this.props.card.link;
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.card.title}</title>
        </Head>
      </div>
    );
  }
}
