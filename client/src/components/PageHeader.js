import React from "react";
import styles from "../styles/pageHeader.module.scss";
import HeaderBar from "../components/HeaderBar.js";

const PageHeader = props => {
  return (
    <div className={styles.page}>
      <HeaderBar />
      <div className={styles.pageContent}>
        <div className={styles.pageTitle}>{props.title}</div>
        {props.children}
      </div>
    </div>
  );
};

export default PageHeader;
