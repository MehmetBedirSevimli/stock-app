import { useContext } from "react";
import Stock from "./Stock";
import { StockContext } from "./contexts/StockContext";

const StockList = () => {

 const {stocks} = useContext(StockContext)

  return (

    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Numara</th>
          <th>İsim</th>
          <th>Miktar(gr)</th>
          <th>Alış Fiyatı</th>
          <th>Satış Fiyatı</th>
          <th>Araçlar</th>
        </tr>
      </thead>
      <tbody>
        <Stock stocks={stocks}/>
      </tbody>
    </table>
  )
}

export default StockList;