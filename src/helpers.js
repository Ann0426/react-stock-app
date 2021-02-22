export const sortStocksByDividendYield = (stocks) => {
  const stocksCopy = [...stocks];
  const year = getCurrentYear();
  console.log(year)
  console.log(stocks)

  const sorted = stocksCopy.sort((stockA, stockB) => {
    return stockB.dividends[year] - stockA.dividends[year];
  });

  return sorted;
  console.log(sorted)
};
export const getTopFiveDividendStocks = (stocks)=>{
  const sorted = sortStocksByDividendYield(stocks)
  const year = getCurrentYear()
  return sorted.slice(0,5).map(stock =>{
    return{
      ticker:stock.ticker,
      name: stock.name,
      amount : stock.dividends[year],
    }
   
  })

}
export const getInfoCardData = (des,stocks) =>{
  if (des === "growth"){
    return calculateGrowthStock(stocks)
  }else if (des === "current"){
    return calculateCurrentStock(stocks)
  }else if (des === "history"){
    return calculateHistoryStock(stocks)
  }

}
const calculateCurrentStock = (stocks) => {
  const sorted = sortStocksByDividendYield(stocks)
  const year = getCurrentYear()
  return {
    ticker:sorted[0].ticker,
    amount:sorted[0].dividends[year]
  }
}
const calculateHistoryStock = (stocks) => {
  const sortedByAllYear = stocks.map(stock =>{
    let total =0;
    Object.keys(stock.dividends).forEach(key =>{
      total += stock.dividends[key]
    })
    stock.total = total
    return stock;

  }).sort((stockA,stockB)=>  { return stockB.total -stockA.total;});
  console.log(sortedByAllYear[0])
  return{
    ticker: sortedByAllYear[0].ticker,
    amount: sortedByAllYear[0].total
  };

};

const calculateGrowthStock = (stocks) =>{
  const sortedByGrowth = stocks.map(stock =>{
    const year = getCurrentYear();
    const campareYear = year -3;
    const total = stock.dividends[year] - stock.dividends[campareYear]; 
    stock.growth = total
    return stock;

  }).sort((stockA,stockB)=>  {return stockB.growth -stockA.growth;});
  return {
    ticker: sortedByGrowth[0].ticker,
    amount: sortedByGrowth[0].growth
  };
};



export const sortStocksByCompoundedYield = (stocks) => {
  return sortStocks(stocks, calculateTotalDividends);
};

export const sortStocksByYieldGrowth = (stocks) => {
  return sortStocks(stocks, calculateGrowth);
};

export const sortStocksByDividendPayoutValue = (stocks) => {
  return sortStocks(stocks, calculateDividendPayoutValue);
};

export const sortStocksByAggregatedDividend = (stocks, callback) => {
  return sortStocks(stocks, callback);
};

const sortStocks = (stocks, sortingValueFunc) => {
  const stocksCopy = [...stocks];

  const sortedByValue = stocksCopy.sort((stockA, stockB) => {
    const stockASortingValue = sortingValueFunc(stockA);
    const stockBSortingValue = sortingValueFunc(stockB);

    if (stockBSortingValue > stockASortingValue) {
      return 1;
    } else if (stockBSortingValue < stockASortingValue) {
      return -1;
    }

    return 0;
  });

  return sortedByValue;
};

export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};

export const calculateTotalDividends = (stock) => {
  let total = 0;
  Object.keys(stock.dividends).forEach((key) => {
    total += stock.dividends[key];
  });

  return total;
};

export const calculateGrowth = (stock) => {
  const year = getCurrentYear();
  const comparisonYear = year - 3;

  const total = stock.dividends[year] - stock.dividends[comparisonYear];
  return total;
};

export const growingDividends = (dividends) => {
  const dividendKeys = Object.keys(dividends);
  const comparisons = [];

  if (dividendKeys.length < 3) return false;

  dividendKeys
    .reverse()
    .slice(0, 3)
    .forEach((key, index) => {
      const firstItem = dividends[key];
      const comparisonItem = dividends[dividendKeys[index + 1]];

      if (index >= 3) {
        return;
      }

      if (firstItem > comparisonItem) {
        comparisons.push(true);
      }
    });

  if (comparisons.length === 3) {
    return true;
  }
  return false;
};

export const consistentDividends = (dividends) => {
  const upperYearBoundry = getCurrentYear();
  const lowerYearBoundry = upperYearBoundry - 20;
  const treshold = 15;

  const results = new Set();

  Object.keys(dividends)
    .map((item) => +item)
    .forEach((item) => {
      if (item <= upperYearBoundry && item >= lowerYearBoundry) {
        results.add(item);
      }
    });

  if (results.size >= treshold) {
    return [true, results];
  }
  return [false, results];
};

const calculateDividendPayoutValue = (stock) => {
  const year = getCurrentYear();
  const dividend = stock.dividends[year];

  const total = dividend * (1000 / stock.ask);
  return total;
};

// export const getInfoCardData = (des,stocks) =>{
//   if(des === "growth"){
//     return calculateGrowth(stocks)
//   } else if(des === "current"){
//     return calculateCurrent(stocks)
//   }else if(des === "history"){
//     return calculateHistory(stocks)
//   }
// }
// const calculateGrowth = (stocks) =>{
//   const sorted = sortStocksByDividendYield(stocks)
//   const year = getCurrentYear()
//   return {
//     ticker: sorted.ticker,
//     amount: sorted.dividend[year]
//   }
// }
// const calculateCurrent = (stocks) =>{
//   const sorted = sortStocksByDividendYield(stocks)
//   return sorted[0]
// }
// const calculateHistory = (stocks) =>{
//   const sorted = sortStocksByCompoundedYield(stocks)
//   return sorted[0]
// }
