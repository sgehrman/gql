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

const apolloServer = new ApolloServer({
  typeDefs: apolloSchema.typeDefs,
  resolvers: apolloSchema.resolvers
});

apolloServer.applyMiddleware({ app });

let port = 3002;
app.listen(port, () => {
  console.log(`Apollo ready at localhost:${port}${apolloServer.graphqlPath}`);
});

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// start server
port = 3001;
const server = app.listen(port, () => {
  console.log(`Express ready at ${server.address()}:${port}/graphql`);
});
