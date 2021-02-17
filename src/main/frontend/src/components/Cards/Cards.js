import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./AddForm/AddForm";
import CardsTable from "./CardsTable/CardsTable";
import {useEffect, useState} from "react";
import DbService from "../../_services/DbService";

const Cards = () => {
    const [cards, setCards] = useState([]);

    const loadData = () => {
        DbService.getAllCards().then( response => {
            setCards(response.data);
        });
    }

    useEffect( () => {
        loadData();
    }, [] )

    return (
        <div>
            <AddForm loadData={loadData}/>
            <CardsTable cards={cards}/>
        </div>
    );
}

export default Cards;
