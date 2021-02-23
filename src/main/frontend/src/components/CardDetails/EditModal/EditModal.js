import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import DbService from "../../../_services/DbService";
import {useParams} from "react-router-dom";

function EditModal(props) {
    const {id} = useParams()
    const [card, setCard] = useState({});
    const [name, setName] = useState('');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getCard() {
        DbService.getCard(id).then(response => {
            setCard(response.data)
            setName(response.data.name)
        })
    }

    useEffect(() => {
        getCard()
    }, [])

    const onChangeName = event => {
        setName(event.target.value);
    }
    const onClickSave = () => {
        card.name = name
        editCard(card)
    }
    async function editCard(data) {
        await DbService.editCard(data)
        props.loadData()
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                EDIT
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit '{card.name}'</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={onChangeName} placeholder="Enter Name"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={onClickSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditModal
