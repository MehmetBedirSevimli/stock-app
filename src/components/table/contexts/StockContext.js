import { createContext, useState } from "react";
import data from "./mock-data.json"

export const StockContext = createContext();

const StockContextProvider = (props) => {
  
  const[ stocks, setstocks ] = useState(data);

  
  return (
    <StockContext.Provider value={{stocks}}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockContextProvider;