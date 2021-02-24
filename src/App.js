import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
// import Header from './components/Header/Header';
// import Subheader from './components/Subheader/Subheader';
// import ExchangeList from './components/ExchangeList/ExchangeList';
// import TopFiveDividendStocksList from "./components/TopFiveDividendStocksList/TopFiveDividendStocksList";
// import InfoCard from "./components/InfoCard/InfoCard";
// import StockList from "./components/StockList/StockList";
import Dashboard from "./pages/Dashboard/Dashboard";
import StockView from "./pages/StockView/StockView";
// import styles from"./App.module.css";
import data from "./data.js";
// import{getTopFiveDividendStocks,getInfoCardData} from "./helpers.js";



function App() {
  const [exchanges, setExchanges] = useState([]);
  const [stocks, setStocks] = useState([]);

  const getData = () => {
    const exchanges = data.exchanges;
    const stocks = data.stocks;

    return {
      exchanges,
      stocks,
    };
  };
  useEffect(() => {
    const { exchanges, stocks } = getData();

    setExchanges(exchanges);
    setStocks(stocks);
  }, []);


  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <Dashboard
              exchanges={exchanges}
              stocks={stocks}
              setStocks={setStocks}
              {...props}
            />
          )}
        />
        <Route
          path="/stocks/:ticker"
          render={(props) => <StockView {...props} stocks={stocks} />}
        />
      
     
      </Router>
    </div>
  );
}


export default App;
