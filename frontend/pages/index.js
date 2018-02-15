import React, { Component } from "react";
import Layout from "../components/Layout";

import Cards from "../components/Cards";
import Card from "../components/Card";
import About from "../components/About";

import withData from "../lib/withData";

class Index extends Component {
  static async getInitialProps({ query }) {
    return {
      editing: query.editing
    };
  }
  render() {
    const { editing } = this.props;
    return (
      <Layout>
        <About />
        <style jsx global>{`
          body {
            background: #252525;
          }
        `}</style>

        <Cards editing={editing} />
      </Layout>
    );
  }
}

export default withData(Index);
