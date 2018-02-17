const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const { Engine } = require("apollo-engine");
const compression = require("compression");

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

const rebuild = () => {
  // TODO: Reverse condition untill I make pm2.json to have NODE_ENV=production in prod
  if (process.env.NODE_ENV === "production") {
    console.log("Build hook function called in production");
    return fetch(
      "https://api.netlify.com/build_hooks/5a85c258fd0efa5a7290bd70",
      {
        method: "POST"
      }
    );
  } else {
    console.log("Build hook function called in development");
  }
};

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
      const result = ctx.db.mutation.createCard(
        {
          data
        },
        info
      );
      rebuild();
      return result;
    },
    updateCard(parent, { where, data }, ctx, info) {
      const result = ctx.db.mutation.updateCard(
        {
          where,
          data
        },
        info
      );
      rebuild();
      return result;
    },
    deleteCard(parent, { where }, ctx, info) {
      const result = ctx.db.mutation.deleteCard(
        {
          where
        },
        info
      );
      rebuild();
      return result;
    },

    createUser(parent, { data }, ctx, info) {
      const result = ctx.db.mutation.createUser({
        data
      });
      rebuild();
      return result;
    },
    updateUser(parent, { where, data }, ctx, info) {
      const result = ctx.db.mutation.updateUser(
        {
          where,
          data
        },
        info
      );
      rebuild();
      return result;
    },
    deleteUser(parent, { where }, ctx, info) {
      const result = ctx.db.mutation.deleteUser(
        {
          where
        },
        info
      );
      rebuild();
      return result;
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
