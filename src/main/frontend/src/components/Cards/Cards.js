import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./AddForm/AddForm";
import CardsTable from "./CardsTable/CardsTable";
import Search from "./Search/Search";
import {useEffect, useState} from "react";
import DbService from "../../_services/DbService";

const NotFound = () => {
    return (
        <div>
            <h1 className="text-center mt-5">RESULTS NOT FOUND</h1>
            <img src="https://icon-library.com/images/error-icon-transparent/error-icon-transparent-24.jpg"
                 className='d-block mx-auto' alt="not found"/>
        </div>
    )
}

const Cards = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(props.cards)
    }, [])

    const loadData = () => {
        DbService.getCards('').then( response => {
            setCards(response.data);
        });
    }
    const loadCardsByName = (name) => {
        DbService.getCards(name).then( response => {
            setCards(response.data);
        });
    }

    useEffect( () => {
        loadData();
    }, [] )

    return (
        <div>
            <AddForm loadData={loadData}/>
            <Search loadCardsByName={loadCardsByName}/>
            {
                (cards === null || cards.length === 0) ? <NotFound/> : <CardsTable cards={cards}/>
            }
        </div>
    );
}

export default Cards;
