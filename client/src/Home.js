import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const Home = props => {
  const handleHealth = e => {
    axios.get("/health").then(res => {
      console.log(res);
    });
  };

  const handleMessage = e => {
    axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
          query MessagePost {
             message
            }
          `
      }
    }).then(result => {
      console.log(result.data);
    });
  };

  return (
    <>
      <div>Home</div>
      <Link to="/about">About</Link>
      <Link to="/todoreducer">TodoReducer</Link>
      <Link to="/todostate">TodoState</Link>

      <div className="App">
        <button onClick={handleHealth}>Health</button>

        <button onClick={handleMessage}>Message</button>
      </div>
    </>
  );
};

export default withRouter(Home);
