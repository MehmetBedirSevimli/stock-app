import { useContext, useState, useEffect } from "react";
import { StockContext } from "./contexts/StockContext";
import { Button, Modal } from "react-bootstrap"
import EditForm from "./EditForm";

const Stock = ({ stock }) => {

  const { deleteStock } = useContext(StockContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [stock])

  return (
    <>

    
      <td>{stock.id}</td>
      <td>{stock.name}</td>
      <td>{stock.quantity}</td>
      <td>{stock.purchasePrice}</td>
      <td>{stock.date}</td>
      <td>
        <button onClick={handleShow} className="btn text-warning p-0" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
        <button onClick={() => deleteStock(stock.id)} className="btn text-danger p-0 " data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            Stok Güncelle
          </Modal.Title>
        </Modal.Header>  
        <Modal.Body>
          <EditForm theStock={stock}/>
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

export default Stock;