const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const { Engine } = require("apollo-engine");
const compression = require("compression");

const { Query, Mutation } = require("./resolvers");

let engine = null;
if (process.env.NODE_ENV === "production") {
  engine = new Engine({
    engineConfig: {
      apiKey: "service:ds-self:UIbWZlrO1TxFloGPmjyFvw",
      logging: {
        level: "DEBUG"
      }
    },
    graphqlPort: 4000,
    endpoint: "/",
    dumpTraffic: true
  });

  engine.start();
}

const resolvers = {
  Query: {
    ...Query
  },
  Mutation: {
    ...Mutation
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "http://localhost:4466/ds/dev", // the endpoint of the Prisma DB service
      secret:
        "very-secret-going-to-version-control-but-i-know-it-and-dont-care", // specified in database/prisma.yml
      debug: false // log all GraphQL queryies & mutations
    })
  })
});

if (process.env.NODE_ENV === "production") {
  server.express.use(compression());
  if (engine) {
    server.express.use(engine.expressMiddleware());
  }
}

server.start(
  {
    tracing: process.env.NODE_ENV === "production" ? true : false,
    cacheControl: process.env.NODE_ENV === "production" ? true : false
  },
  () => console.log("Server is running on http://localhost:4000")
);
