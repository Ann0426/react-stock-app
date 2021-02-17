import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>StockApp</span>
        </div>
        

        <div className={styles.userContainer}>
          <div className={styles.user}>AK</div>
          <span>Ann Kuo</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
