import { Form, Button } from 'react-bootstrap';
import { StockContext } from './contexts/StockContext';
import { useContext, useState } from 'react';

const EditForm = ({theStock}) => {

    const { updateStock } = useContext(StockContext);

    const stock = theStock;
    const id = stock.id;

    const [idx, SetIdx] = useState(stock.id);
    const [name, SetName] = useState(stock.name);
    const [quantity, SetQuantity] = useState(stock.quantity);
    const [purchasePrice, SetPurchasePrice] = useState(stock.purchasePrice);
    const [date, SetDate] = useState(stock.date);

    const updatedStock = {id, name, quantity, purchasePrice, date};

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
                    onChange={(e)=>SetIdx(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="İsim *"
                    name="name"
                    value={name}
                    onChange={(e)=>SetName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Miktar(gr) *"
                    name="quantity"
                    value={quantity}
                    onChange={(e)=>SetQuantity(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Alış Fiyatı *"
                    name="purchasePrice"
                    value={purchasePrice}
                    onChange={(e)=>SetPurchasePrice(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Alım Tarihi *"
                    name="date"
                    value={date}
                    onChange={(e)=>SetDate(e.target.value)}
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