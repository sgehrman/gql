import express from "express";
import expressGraphQL from "express-graphql";
import moesifExpress from "moesif-express";
import dotenv from "dotenv";
import schema from "./schema.js";

dotenv.config();

const app = express();

var moesifMiddleware = moesifExpress({
  applicationId:
    "eyJhcHAiOiI2MTc6MjA0IiwidmVyIjoiMi4wIiwib3JnIjoiMjA3OjIxNyIsImlhdCI6MTU3MTE4NDAwMH0.4I75UmZcKoIZxRel9cZtzfXHZdnTGxT-Xn25UNuyyyg",
  logBody: true
});
app.use(moesifMiddleware);

// setup GraphQL

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// health endpoint
app.get("/health", (eq, res) => {
  res.send("healthy");
});

// start server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("server is running at %s .", server.address().port);
});
