const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const { Engine } = require("apollo-engine");
const compression = require("compression");

const engine = new Engine({
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

const resolvers = {
  Query: {
    cards(
      parent,
      { where, orderBy, skip, after, before, first, last },
      ctx,
      info
    ) {
      return ctx.db.query.cards(
        {
          where,
          orderBy,
          skip,
          after,
          before,
          first,
          last
        },
        info
      );
    },
    user(parent, { where }, ctx, info) {
      return ctx.db.query.user(
        {
          where
        },
        info
      );
    }
  },
  Mutation: {
    createCard(parent, { data }, ctx, info) {
      return ctx.db.mutation.createCard(
        {
          data
        },
        info
      );
    },
    updateCard(parent, { where, data }, ctx, info) {
      return ctx.db.mutation.updateCard(
        {
          where,
          data
        },
        info
      );
    },
    deleteCard(parent, { where }, ctx, info) {
      return ctx.db.mutation.deleteCard(
        {
          where
        },
        info
      );
    },

    createUser(parent, { data }, ctx, info) {
      return ctx.db.mutation.createUser({
        data
      });
    },
    updateUser(parent, { where, data }, ctx, info) {
      return ctx.db.mutation.updateUser(
        {
          where,
          data
        },
        info
      );
    },
    deleteUser(parent, { where }, ctx, info) {
      return ctx.db.mutation.deleteUser(
        {
          where
        },
        info
      );
    }
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

server.express.use(compression());
server.express.use(engine.expressMiddleware());

server.start(
  {
    tracing: true,
    cacheControl: true
  },
  () => console.log("Server is running on http://localhost:4000")
);
