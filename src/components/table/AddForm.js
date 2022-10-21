import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { StockContext } from './contexts/StockContext';
import { useContext, useState } from 'react';

const AddForm = () => {

    const { addStock } = useContext(StockContext);

    const [newStock, setNewStock] = useState({
        id: "", name: "", quantity: "", unit: "",
        purchasePrice: "", date: ""
    })

    const { id, name, quantity, unit, purchasePrice, date } = newStock;

    const onInputChange = (e) => {
        setNewStock({ ...newStock, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addStock(id, name, quantity, unit, purchasePrice, date)
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

                <Form.Select aria-label="Default select example"
                    type="text"
                    placeholder="Miktar(gr) *"
                    name="unit"
                    value={unit}
                    onChange={e => onInputChange(e)}
                    required
                >
                    <option>Birim seçiniz</option>
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