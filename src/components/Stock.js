import React from "react";

function Stock({stock, onStockClick}) {
  const {id, name, price} = stock;

  function handleClick() {
    // fetch(`http://localhost:3001/portfolio`,{
    //   method: "POST",
    //   headers: {"content-type": "application/json"},
    //   body: JSON.stringify(stock)}
    // )
    // .then(res=>res.json())
    // .then(stock=> console.log("Added", stock));

    onStockClick(stock, true);
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
