import React from "react";
import { withRouter } from "react-router-dom";
import HeaderBar from "../components/HeaderBar.js";

const About = props => {
  return (
    <>
      <HeaderBar />

      <div>About</div>
    </>
  );
};

export default withRouter(About);
