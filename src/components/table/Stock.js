import { useContext } from "react";
import { StockContext } from "./contexts/StockContext";

const Stock = ({ stocks }) => {

  const {deleteStock} = useContext(StockContext);

  return (
    <>
      {
        stocks.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.id}</td>
            <td>{stock.name}</td>
            <td>{stock.quantity}</td>
            <td>{stock.purchasePrice}</td>
            <td>{stock.salePrice}</td>
            <td>
              <button className="btn text-warning p-0" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
              <button onClick={() => deleteStock(stock.id)} className="btn text-danger p-0" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>
          </tr>
        ))
      }
    </>

  )
}

export default Stock;