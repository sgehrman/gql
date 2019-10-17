import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_AUTHORS = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const AuthorList = () => (
  <Query query={GET_AUTHORS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }}
  </Query>
);

export default AuthorList;
