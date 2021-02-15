import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const AddForm = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    const onChangeName = event => {
        setName(event.target.value);
    }
    const onChangePrice = event => {
        setPrice(event.target.value);
    }
    const onChangeAmount = event => {
        setAmount(event.target.value);
    }
    const onSubmitForm = event => {
        const inputData = {name, price, amount};
        addItem(inputData)

        setName('');
        setPrice(0);
        setAmount(0);

        event.preventDefault();
    }

    async function addItem(data) {
        const response = await fetch('http://localhost:8080/addItem', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });

        let messageData = await response.json();
        setMessage(messageData.id ? 'Added: ' + messageData : 'Error')
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Price</Form.Label>
                <Form.Control type="number" value={price} onChange={onChangePrice} placeholder="Enter price" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Item Amount</Form.Label>
                <Form.Control type="number" value={amount} onChange={onChangeAmount} placeholder="Enter amount" />
            </Form.Group>
            <Form.Group>
                <Button type={'submit'} className={'col-12'} variant={'dark'}>ADD</Button>
            </Form.Group>
        </Form>
    );
}

export default AddForm;
