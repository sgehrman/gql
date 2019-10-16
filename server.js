import express from "express";
import expressGraphQL from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import favicon from "serve-favicon";
import moesifExpress from "moesif-express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

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

// 2. Set the options, the only required field is applicationId.
var moesifMiddleware = moesifExpress({
  applicationId:
    "eyJhcHAiOiI2MTc6MjA0IiwidmVyIjoiMi4wIiwib3JnIjoiMjA3OjIxNyIsImlhdCI6MTU3MTE4NDAwMH0.4I75UmZcKoIZxRel9cZtzfXHZdnTGxT-Xn25UNuyyyg",
  logBody: true
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// 3 Enable the Moesif middleware to start capturing incoming GraphQL API Calls hitting your APIs.
app.use(moesifMiddleware);
const server = app.listen(port, () => {
  console.log("server is running at %s .", server.address().port);
});
