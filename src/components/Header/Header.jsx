import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {auth} from "../../firebase";
const Header = () => {


  
  const handleAuthenticaton = () => {
    // if (user) {
    //     auth.signOut();
    }


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>StockApp</span>
        </Link>
        
        <Link to = { '/login' } className={styles.logoContainer}>
        
        <div onClick = { handleAuthenticaton }
        className = {styles.header__option} >
        <span className = {styles.header__optionLineOne} > Hello Ann </span> 
        <span className = {styles.header__optionLineTwo} > Ann </span> 
        </div > 
        </Link>
      </div>
    </header>
  );
};
 
       
        
export default Header;
