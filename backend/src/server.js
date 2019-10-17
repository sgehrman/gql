import express from "express";
import expressGraphQL from "express-graphql";
import moesifExpress from "moesif-express";
import dotenv from "dotenv";
import schema from "./schema.js";
import apolloSchema from "./apolloSchema.js";
const { ApolloServer } = require("apollo-server-express");

dotenv.config();

const app = express();

var moesifMiddleware = moesifExpress({
  applicationId: process.env.APPID,
  logBody: true
});
app.use(moesifMiddleware);

// health endpoint
app.get("/health", (eq, res) => {
  res.send("healthy");
});

const port = process.env.PORT || 3000;
const useApollo = false;

if (useApollo) {
  const server = new ApolloServer({
    typeDefs: apolloSchema.typeDefs,
    resolvers: apolloSchema.resolvers
  });

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Apollo ready at localhost:${port}${server.graphqlPath}`);
  });
} else {
  app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );

  // start server
  const server = app.listen(port, () => {
    console.log(`Express ready at ${server.address()}:${port}/graphql`);
  });
}
