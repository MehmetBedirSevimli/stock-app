const Stock = ({stocks}) => {
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
            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
          </td>
        </tr>
      ))
    }
    </>

  )
}

export default Stock;