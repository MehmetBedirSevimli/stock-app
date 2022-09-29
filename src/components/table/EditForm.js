import { Form, Button } from 'react-bootstrap';
import { StockContext } from './contexts/StockContext';
import { useContext, useState } from 'react';

const EditForm = ({ theStock }) => {

    const { updateStock } = useContext(StockContext);

    const stock = theStock;
    const id = stock.id;

    const [idx, SetIdx] = useState(stock.id);
    const [name, SetName] = useState(stock.name);
    const [quantity, SetQuantity] = useState(stock.quantity);
    const [unit, SetUnit] = useState(stock.unit);
    const [purchasePrice, SetPurchasePrice] = useState(stock.purchasePrice);
    const [date, SetDate] = useState(stock.date);

    const updatedStock = { id, name, quantity, unit, purchasePrice, date };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStock(id, updatedStock);
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Numara *"
                    name="id"
                    value={idx}
                    onChange={(e) => SetIdx(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="İsim *"
                    name="name"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Miktar(gr) *"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => SetQuantity(e.target.value)}
                    required
                />
            
                <Form.Select aria-label="Default select example"
                    type="text"
                    placeholder="Miktar(gr) *"
                    name="unit"
                    value={unit}
                    onChange={(e) => SetUnit(e.target.value)}
                    required
                >
                    <option>Open this select menu</option>
                    <option value="(ons)">(ons)</option>
                    <option value="(gr)">(gr)</option>
                    <option value="(kg)">(kg)</option>
                </Form.Select>
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Alış Fiyatı *"
                    name="purchasePrice"
                    value={purchasePrice}
                    onChange={(e) => SetPurchasePrice(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="Alım Tarihi *"
                    name="date"
                    value={date}
                    onChange={(e) => SetDate(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Stok Güncelle
            </Button>

        </Form>
    )
}

export default EditForm;