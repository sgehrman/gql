import express from "express";
import expressGraphQL from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import favicon from "serve-favicon";
import moesifExpress from "moesif-express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

var moesifMiddleware = moesifExpress({
  applicationId:
    "eyJhcHAiOiI2MTc6MjA0IiwidmVyIjoiMi4wIiwib3JnIjoiMjA3OjIxNyIsImlhdCI6MTU3MTE4NDAwMH0.4I75UmZcKoIZxRel9cZtzfXHZdnTGxT-Xn25UNuyyyg",
  logBody: true
});
app.use(moesifMiddleware);

// setup GraphQL
const params = {
  name: "hello",
  fields: () => ({
    message: {
      type: GraphQLString,
      resolve: () => "hello"
    }
  })
};

const schema = new GraphQLSchema({
  query: new GraphQLObjectType(params)
});

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// favicon
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

// health endpoint
app.get("/health", (eq, res) => {
  res.send("healthy");
});

// start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("server is running at %s .", server.address().port);
});
