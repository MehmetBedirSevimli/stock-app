import { useContext, useState, useEffect } from "react";
import Stock from "./Stock";
import { StockContext } from "./contexts/StockContext";
import { Button, Modal } from "react-bootstrap"
import AddForm from "./AddForm";

const StockList = () => {

  const { stocks } = useContext(StockContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [stocks])

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
            <th>Numara</th>
            <th>İsim</th>
            <th>Miktar(Ons)</th>
            <th>Alış Fiyatı (USD/Ons)</th>
            <th>Alım Tarihi</th>
            <th>Araçlar</th>
          </tr>
        </thead>
        <tbody>
          {
            stocks.map((stock) => (
              <tr key={stock.id}>
                <Stock stock={stock} />
              </tr>
              ))
          }
        </tbody>
      </table>

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