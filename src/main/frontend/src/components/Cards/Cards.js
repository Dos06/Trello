import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./AddForm/AddForm";
import CardsTable from "./CardsTable/CardsTable";

const Cards = () => {
    return (
        <div>
            <AddForm/>
            <CardsTable/>
        </div>
    );
}

export default Cards;
