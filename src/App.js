import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import ExchangeList from './components/ExchangeList/ExchangeList';
import TopFiveDividendStocksList from "./components/TopFiveDividendStocksList/TopFiveDividendStocksList";
import InfoCard from "./components/InfoCard/InfoCard";
import StockList from "./components/StockList/StockList";
import styles from"./App.module.css";
import data from "./data.js"
import{sortStocksByDividendYield} from "./helpers.js";



function App() {
  sortStocksByDividendYield(data.stocks)

  return <div className="App"> 
            <Header/> 
            <Subheader>
              <ExchangeList exchanges={data.exchanges}/>
              <TopFiveDividendStocksList stocks={sortStocksByDividendYield(data.stocks)}/>
              <div classname={styles.InfoCardContainer}>
                <InfoCard title = " Highest stock this year" stock={data.stocks}/>
                <InfoCard title = " Highest stock all years" stock={data.stocks}/>
                <InfoCard title = " Highest growth in 5  year" stock={data.stocks} darkmode/>
              </div>
            </Subheader>
            <div className = { styles.dashboardContent}>
              <div className = {styles.dashboardContentContainer}>
                <StockList stocks={data.stocks}/>
              </div>
            </div>
            

      
            
  </div>
}

export default App;
