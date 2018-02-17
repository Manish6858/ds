import React, { Component } from "react";
import Layout from "../components/Layout";

import Cards from "../components/Cards";
import Card from "../components/Card";
import About from "../components/About";
import Scripts from "../components/Scripts";

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
        <Scripts editing={editing} />
        <About editing={editing} />
        <Cards editing={editing} />
        <div className="poweredBy">
          <a target="_blank" href="https://github.com/divyenduz/ds">
            Powered by DS
          </a>
        </div>
        <style jsx global>{`
          body {
            background: #252525;
          }
          .poweredBy {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #555;
            font-size: 12px;
          }
          .poweredBy a,
          .poweredBy a:visited {
            color: #555;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withData(Index);
