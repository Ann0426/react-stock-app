import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import ExchangeList from './components/ExchangeList/ExchangeList';
import TopFiveDividendStocksList from "./components/TopFiveDividendStocksList/TopFiveDividendStocksList";
import InfoCard from "./components/InfoCard/InfoCard";

import data from "./data.js"
import{sortStocksByDividendYield} from "./helpers";


function App() {
  sortStocksByDividendYield(data.stocks)

  return <div className="App"> 
            <Header/> 
            <Subheader>
              <ExchangeList exchanges={data.exchanges}/>
              <TopFiveDividendStocksList stocks={sortStocksByDividendYield(data.stocks)}/>
              
              <InfoCard title = " Highest stock this year" stock={{ticker:"xyx", amount: 20}}/>
              <InfoCard title = " Highest stock this year" stock={{ticker:"xyx", amount: 20}}/>
              <InfoCard title = " Highest stock this year" stock={{ticker:"xyx", amount: 20}} darkmode/>
       
  
            </Subheader>
            
  </div>
}

export default App;
