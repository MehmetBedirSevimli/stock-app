import { createContext, useState } from "react";
import data from "./mock-data.json"

export const StockContext = createContext();

const StockContextProvider = (props) => {

  const [stocks, setStocks] = useState(data);

  const sortedStocks = stocks.sort((a, b) => (a.id < b.id ? -1 : 1));

  const addStock = (id, name, quantity, unit, purchasePrice, date) => {
    setStocks([...stocks, { id, name, quantity, purchasePrice, date }])
  }

  const deleteStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id))
  }

  const updateStock = (id, updateStock) => {
    setStocks(stocks.map((stock) => (stock.id === id ? updateStock : stock)))
  }

  return (
    <StockContext.Provider value={{ sortedStocks, addStock, deleteStock, updateStock }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockContextProvider;