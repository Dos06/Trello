import Card from "./Card/Card";

const CardsTable = (props) => {

    return (
        <div>
            <div className="row">
                {props.cards.map(c => (
                    <Card key={c.id} id={c.id} name={c.name} date={c.date}/>
                ))}
            </div>
        </div>
    );
}

export default CardsTable;
