import { createContext, useState } from "react";
import data from "./mock-data.json"

export const StockContext = createContext();

const StockContextProvider = (props) => {

  const [stocks, setStocks] = useState(data);

  const addStock = (id, name, quantity, purchasePrice, date) => {
    setStocks([...stocks, { id, name, quantity, purchasePrice, date }])
  }

  const deleteStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id))
  }

  const updateStock = (id, updateStock) => {
    setStocks(stocks.map((stock) => (stock.id === id ? updateStock : stock)))
  }

  return (
    <StockContext.Provider value={{ stocks, addStock, deleteStock, updateStock }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockContextProvider;