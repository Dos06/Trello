import {Button, Form} from "react-bootstrap";
import {useState} from "react";

const AddForm = (props) => {
    const cardId = props.cardId;
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const onChangeName = event => {
        setName(event.target.value);
    }
    const onSubmitForm = event => {
        const inputData = {name, cardId};
        addTask(inputData)

        setName('');

        event.preventDefault();
    }

    async function addTask(data) {
        const response = await fetch('http://localhost:8080/addTask', {
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
                <Form.Label>Task Name</Form.Label>
                <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Enter name"/>
            </Form.Group>
            <Form.Group>
                <Button type={'submit'} className={'col-12'} variant={'dark'}>ADD</Button>
            </Form.Group>
        </Form>
    );
}

export default AddForm;
