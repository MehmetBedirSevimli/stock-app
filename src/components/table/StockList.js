import { useContext, useState, useEffect } from "react";
import Stock from "./Stock";
import { StockContext } from "./contexts/StockContext";
import { Button, Modal } from "react-bootstrap"
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const StockList = () => {

  const { sortedStocks } = useContext(StockContext);

  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stocksPerPage] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [sortedStocks])

  const indexOfLastStock = currentPage * stocksPerPage;
  const indexOfFirstStock = indexOfLastStock - stocksPerPage;
  const currentStocks = sortedStocks.slice(indexOfFirstStock, indexOfLastStock);
  const totalPagesNum = Math.ceil(sortedStocks.length / stocksPerPage);

  return (

    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2><b>Stok</b> Yönetimi</h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Yeni Stok Ekle</span></Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Miktar(Ons)</th>
            <th>Alış Fiyatı (USD/Ons)</th>
            <th>Alım Tarihi</th>
            <th>Araçlar</th>
          </tr>
        </thead>
        <tbody>
          {
            currentStocks.map((stock) => (
              <tr key={stock.id}>
                <Stock stock={stock} />
              </tr>
            ))
          }
        </tbody>
      </table>

      <Pagination 
      pages = {totalPagesNum} 
      setCurrentPage = {setCurrentPage}
      currentStocks = {currentStocks}
      sortedStocks = {sortedStocks}
      /> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            Stok Ekle
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Modalı Kapat
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default StockList;