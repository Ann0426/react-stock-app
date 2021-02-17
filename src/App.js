import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Subheader from './components/Subheader/Subheader';
import ExchangeList from './components/ExchangeList/ExchangeList';
import data from "./data.js"
function App() {
  return <div className="App"> 
            <Header/> 
            <Subheader>
            <ExchangeList exchanges={data.exchanges}/>
            </Subheader>
  </div>
}

export default App;
