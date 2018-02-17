// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

import withData from "../lib/withData";
import Scripts from "../components/Scripts";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Scripts />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            :global(body) {
              font-family: monospace;
            }
          `}</style>
        </body>
      </html>
    );
  }
}

export default withData(MyDocument);
