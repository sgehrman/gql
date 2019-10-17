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

  const handleVersion = e => {
    axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
          query MessagePost {
             version
            }
          `
      }
    }).then(result => {
      showResults(result.data);
    });
  };

  const handleBooks = e => {
    axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
          query BooksPost {
             books {
               name
               authorId
             }
            }
          `
      }
    }).then(result => {
      showResults(result.data);
    });
  };

  const handleAuthors = e => {
    axios({
      url: "/graphql",
      method: "post",
      data: {
        query: `
          query AuthorsPost {
             authors {
               name
             }
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
        <Link to="/booklist">
          <button type="button">Booklist Page</button>
        </Link>

        <div>Endpoint calls</div>

        <button onClick={handleHealth}>Health</button>

        <div>GraphQL calls</div>
        <button onClick={handleVersion}>Version</button>
        <button onClick={handleBooks}>Books</button>
        <button onClick={handleAuthors}>Authors</button>
      </div>

      <Dialog open={dialogOpen} onNav={dialogNav}>
        <pre>{results}</pre>
      </Dialog>
    </PageHeader>
  );
};

export default withRouter(Home);
