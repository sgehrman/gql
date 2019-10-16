import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import HeaderBar from "../components/HeaderBar.js";
import styles from "../styles/shared.module.scss";

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
    <div className={styles.page}>
      <HeaderBar />
      <div>Home</div>

      <div className={styles.buttonList}>
        <Link to="/todoreducer">
          <button type="button">Todo with Reducer</button>
        </Link>
        <Link to="/todostate">
          <button type="button">Todo with State</button>
        </Link>

        <div>Endpoint calls</div>

        <button onClick={handleHealth}>Health</button>

        <div>GraphQL calls</div>
        <button onClick={handleMessage}>Message</button>
      </div>
    </div>
  );
};

export default withRouter(Home);
