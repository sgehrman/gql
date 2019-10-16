import React from "react";
import { withRouter } from "react-router-dom";
import HeaderBar from "../components/HeaderBar.js";

const About = props => {
  return (
    <>
      <HeaderBar />

      <div>About</div>

      <div>
        Source code can be found{" "}
        <a href="https://github.com/sgehrman/gql" target="_blank">
          here.
        </a>
      </div>
    </>
  );
};

export default withRouter(About);
