const { gql } = require("apollo-server-express");
import { books, authors } from "./data.js";

const typeDefs = gql`
  type Book {
    id: Int
    name: String
    authorId: Int
  }
  type Author {
    id: Int
    name: String
  }
  type Query {
    authors: [Author]
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  }
};

export default { typeDefs, resolvers };
