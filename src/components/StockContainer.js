import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer({onStockClick, filterTxt, sortBy}) {
  const [stocks, setStocks] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then(res=>res.json())
    .then(stocks=> setStocks(prevStocks=>stocks))
  }, [])

  const filteredStocks = (filterTxt==="")? stocks : stocks.filter(p=>p.type===filterTxt);
  const sortedStocked = filteredStocks.sort((a, b) => 
    sortBy === "name" ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy]);

  return (
    <div>
      <h2>Stocks</h2>
      {sortedStocked.map(stock=>
      <Stock
        key={stock.id}
        stock={stock}
        onStockClick={onStockClick}
      />)}
    </div>
  );
}

export default StockContainer;
