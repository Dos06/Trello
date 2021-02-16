import {useEffect, useState} from "react";
import Card from "./Card/Card";
import DbService from "../../../_services/DbService";

const CardsTable = (props) => {

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
            <div className="row">
                {cards.map(c => (
                    <Card key={c.id} id={c.id} name={c.name} date={c.date}/>
                ))}
            </div>
        </div>
    );
}

export default CardsTable;
