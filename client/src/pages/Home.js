import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styles from "../styles/shared.module.scss";
import Dialog from "../components/Dialog.js";
import PageHeader from "../components/PageHeader.js";

const Home = props => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [results, setResults] = useState("");

  const handleHealth = e => {
    axios.get("/health").then(res => {
      showResults(res.data);
    });
  };

  const dialogNav = () => {
    setDialogOpen(false);
  };

  const showResults = data => {
    setResults(JSON.stringify(data, null, 2));
    setDialogOpen(true);
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
      showResults(result.data);
    });
  };

  return (
    <PageHeader title="Home">
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

      <Dialog open={dialogOpen} onNav={dialogNav}>
        {results}
      </Dialog>
    </PageHeader>
  );
};

export default withRouter(Home);
