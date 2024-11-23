import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [filterTxt, setFilterTxt] = useState("")
  const [sortBy, setSortBy] = useState("id");
  const [portfolio, setPortfolio] = useState([])

  function addStock(stock) {
    setPortfolio(prevPortfolio=>
    [...prevPortfolio, stock])
  }

  function removeStock(stock) {
    setPortfolio(prevPortfolio=>
      prevPortfolio.filter(s=> s.id!==stock.id)
    )
  }

  function addStockFilter(event) {
    setFilterTxt(prevFilterTxt=>event.target.value);
  }

  function addStockSort(event) {
    const clicked = event.target.value
    const sortMap = {
      "Alphabetically": "name",
      "Price": "price"
    }
    setSortBy(prevSortBy=>sortMap[clicked]);
  }

  return (
    <div>
      <SearchBar addStockFilter={addStockFilter} addStockSort={addStockSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer onStockClick={addStock} filterTxt={filterTxt} sortBy={sortBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockClick={removeStock} filterTxt={filterTxt} sortBy={sortBy}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
