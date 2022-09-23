import { Form, Button } from 'react-bootstrap';
import { StockContext } from './contexts/StockContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addStock } = useContext(StockContext);

    const [newStock, setNewStock] = useState({
        id: "", name: "", quantity: "", 
        purchasePrice: "", date: ""
    })

    const { id, name, quantity, purchasePrice, date } = newStock;

    const onInputChange = (e) => {
        setNewStock({ ...newStock, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addStock(id, name, quantity, purchasePrice, date)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Numara *"
                    name="id"
                    value={id}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="İsim *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Miktar(gr) *"
                    name="quantity"
                    value={quantity}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Alış Fiyatı *"
                    name="purchasePrice"
                    value={purchasePrice}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="date"
                    placeholder="Alım Tarihi *"
                    name="date"
                    value={date}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Yeni Stok Ekle
            </Button>
        </Form>
    )
}

export default AddForm;