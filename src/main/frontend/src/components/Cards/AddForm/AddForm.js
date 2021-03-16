import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import DbService from "../../../_services/DbService";

const AddForm = (props) => {
    const [name, setName] = useState("");

    const onChangeName = event => {
        setName(event.target.value);
    }
    const onSubmitForm = event => {
        const inputData = {name};
        addCard(inputData)

        setName('');

        event.preventDefault();
    }

    async function addCard(data) {
        DbService.addCard(data)
            .then(_ => {
                props.store.addNotification({
                    title: 'A card was added',
                    message: ' ',
                    type: 'success',
                    container: 'top-right',
                    insert: 'top',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],
                    dismiss: {
                        duration: 2000,
                        showIcon: true,
                    },
                    width: 500,
                })
            })
            .catch(e => {
                props.store.addNotification({
                    title: e.toString(),
                    message: ' ',
                    type: 'danger',
                    container: 'top-right',
                    insert: 'top',
                    animationIn: ['animated', 'fadeIn'],
                    animationOut: ['animated', 'fadeOut'],
                    dismiss: {
                        duration: 2000,
                        showIcon: true,
                    },
                    width: 500,
                })
            console.log(e)
        })
        props.loadData();
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label>Card Name</Form.Label>
                <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Enter name"/>
            </Form.Group>
            <Form.Group>
                <Button type={'submit'} className={'col-12'} variant={'dark'}>ADD</Button>
            </Form.Group>
        </Form>
    );
}

export default AddForm;
