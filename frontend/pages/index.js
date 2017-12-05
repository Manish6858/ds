import React, { Component } from "react";
import Layout from "../components/Layout";

import Cards from "../components/Cards";
import Card from "../components/Card";
import About from "../components/About";

import withData from "../lib/withData";

export default withData(() => (
  <Layout>
    <About />
    <style jsx global>{`
      body {
        background: #252525;
      }
    `}</style>
    <Cards />
  </Layout>
));
