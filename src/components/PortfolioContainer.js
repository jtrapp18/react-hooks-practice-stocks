import React, {useEffect} from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onStockClick, filterTxt, sortBy}) {

  const filteredStocks = (filterTxt==="")? portfolio : portfolio.filter(p=>p.type===filterTxt);
  const sortedStocked = filteredStocks.sort((a, b) => 
    typeof a[sortBy] === "string" ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy]);

  return (
    <div>
      <h2>My Portfolio</h2>
        {sortedStocked.map(stock=>
          <Stock
            key={stock.id}
            stock={stock}
            onStockClick={onStockClick}
          />
        )}
    </div>
  );
}

export default PortfolioContainer;
