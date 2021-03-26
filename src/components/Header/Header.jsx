import React from "react";

import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {auth} from "../../firebase";
import { useStateValue } from "../../StateProvider";
const Header = () => {
  const [{  user }, dispatch] = useStateValue();


  
  const handleAuthenticaton = () => {
    if (user) {
        auth.signOut();
    }
  }


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>StockApp</span>
        </Link>
        
        
        
        <div onClick = { handleAuthenticaton }
        className = {styles.header__option} >
        <span className = {styles.header__optionLineOne} >Hello {!user ? 'Guest' : user.email } ! </span> 
        <Link to = {!user && '/login' } className={styles.logoContainer}>
        <span className = {styles.header__optionLineTwo} > {user ? 'Sign Out' : 'Sign In'} </span> </Link>
        
        </div > 
        <Link to = {user && '/profile' } className={styles.logoContainer}>
        <span className = {styles.header__optionLineTwo} > {user ? 'Profile' : ' '} </span> </Link>

        
      </div>
    </header>
  );
};
 
       
        
export default Header
