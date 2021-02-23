import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DbService from "../../../_services/DbService";
import {Button, Modal} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const DeleteModal = (props) => {
    const history = useHistory();
    const {id} = useParams()
    const [card, setCard] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getCard() {
        DbService.getCard(id).then(response => {
            setCard(response.data)
        })
    }

    const onClickDelete = () => {
        deleteCard(card)
    }
    async function deleteCard(data) {
        console.log(data)
        await DbService.deleteCard(data)
        history.push("/");
    }

    useEffect(() => {
        getCard()
    }, [])

    return (
        <>
            <Button variant="danger" onClick={handleShow} className={'mx-3'}>
                DELETE
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete '{card.name}'</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={onClickDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal
