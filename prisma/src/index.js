const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const { Engine } = require("apollo-engine");
const compression = require("compression");
const { S3 } = require("aws-sdk");
const cors = require("cors");

const fileApi = require("./modules/fileAPI");

const { Query, Mutation } = require("./resolvers");

const s3client = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY_ID,
  params: {
    Bucket: process.env.AWS_S3_BUCKET_NAME
  }
});

let engine = null;
if (process.env.NODE_ENV === "production") {
  engine = new Engine({
    engineConfig: {
      apiKey: process.env.APOLLO_ENGINE_API_KEY,
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

const getPrismaInstance = () => {
  return new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service
    secret: process.env.PRISMA_SECRET, // specified in database/prisma.yml
    debug: false // log all GraphQL queryies & mutations
  });
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: getPrismaInstance()
  })
});

server.express.use(cors());

server.express.post(
  "/upload",
  fileApi({
    s3: s3client,
    prisma: getPrismaInstance()
  })
);

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
