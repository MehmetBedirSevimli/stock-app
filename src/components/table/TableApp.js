import StockList from "./StockList";
import StockContextProvider from "./contexts/StockContext";

function TableApp() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
           
            <StockContextProvider>
              <StockList />
            </StockContextProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableApp;