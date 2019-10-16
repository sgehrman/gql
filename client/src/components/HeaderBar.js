import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/headerBar.module.scss";

const HeaderBar = () => {
  return (
    <div className={styles.headerBar}>
      <div className={styles.contents}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default HeaderBar;
