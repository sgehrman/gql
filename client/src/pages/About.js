import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../components/PageHeader.js";

const About = props => {
  return (
    <PageHeader title="About">
      <div>
        Source code can be found{" "}
        <a
          href="https://github.com/sgehrman/gql"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </div>
    </PageHeader>
  );
};

export default withRouter(About);
