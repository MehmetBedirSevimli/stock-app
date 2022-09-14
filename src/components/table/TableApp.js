import StockList from "./StockList";
import StockContextProvider from "./contexts/StockContext";

function TableApp() {
  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Stocks</b></h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Yeni Stok Ekle</span></a>
                </div>
              </div>
            </div>
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