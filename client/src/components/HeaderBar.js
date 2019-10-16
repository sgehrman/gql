import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/headerBar.module.scss";

const HeaderBar = () => {
  return (
    <div className={styles.headerBar}>
      <div className={styles.contents}>
        <NavLink to="/" exact activeClassName={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/about" exact activeClassName={styles.activeLink}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderBar;
