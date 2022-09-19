import { createContext, useState } from "react";
import data from "./mock-data.json"

export const StockContext = createContext();

const StockContextProvider = (props) => {

  const [stocks, setStocks] = useState(data);

  const addStock = (id, name, quantity, purchasePrice, salePrice) => {
    setStocks([...stocks, { id, name, quantity, purchasePrice, salePrice }])
  }

  const deleteStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id))
  }

  return (
    <StockContext.Provider value={{ stocks, addStock, deleteStock }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockContextProvider;