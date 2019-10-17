import express from "express";
import expressGraphQL from "express-graphql";
import moesifExpress from "moesif-express";
import dotenv from "dotenv";
import schema from "./schema.js";
import apolloSchema from "./apolloSchema.js";
const { ApolloServer } = require("apollo-server-express");
var bodyParser = require("body-parser");

dotenv.config();

const startExpressServer = () => {
  const app = express();

  // this fixes the body not showing in moesif
  app.use(bodyParser.json());

  var moesifMiddleware = moesifExpress({
    applicationId: process.env.APPID,
    logBody: true
  });
  app.use(moesifMiddleware);

  // health endpoint
  app.get("/health", (eq, res) => {
    res.send("healthy");
  });

  app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );

  // start server
  const port = 3001;
  const server = app.listen(port, () => {
    console.log(`Express ready at ${server.address()}:${port}/graphql`);
  });
};

const startApolloServer = () => {
  const app = express();

  var moesifMiddleware = moesifExpress({
    applicationId: process.env.APPID,
    logBody: true
  });
  app.use(moesifMiddleware);

  const server = new ApolloServer({
    typeDefs: apolloSchema.typeDefs,
    resolvers: apolloSchema.resolvers
  });

  server.applyMiddleware({ app });

  const port = 3002;
  app.listen(port, () => {
    console.log(`Apollo ready at localhost:${port}${server.graphqlPath}`);
  });
};

startExpressServer();
startApolloServer();
