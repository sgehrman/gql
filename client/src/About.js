import React from "react";
import { Link, withRouter } from "react-router-dom";

const About = props => {
  return (
    <>
      <div>About</div>
      <Link to="/">Back Home</Link>
    </>
  );
};

export default withRouter(About);
