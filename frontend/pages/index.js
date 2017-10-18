import React, { Component } from "react";
import Layout from "../components/Layout";

import Cards from "../components/Cards";
import Card from "../components/Card";

import withData from "../lib/withData";

export default withData(() => (
  <Layout>
    <Cards />
  </Layout>
));
