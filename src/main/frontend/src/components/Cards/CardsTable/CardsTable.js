import {useEffect, useState} from "react";
import Card from "./Card/Card";

const CardsTable = () => {
    const [data, setData] = useState([]);

    async function loadData() {
        let response = await fetch('http://localhost:8080/allcards');
        let tableData = await response.json();
        setData(tableData);
    }

    useEffect( () => {
        loadData();
    }, [] )

    return (
        <div>
            <div className="row">
                {data?.map(c => (
                    <Card id={c.id} name={c.name} date={c.date}/>
                ))}
            </div>
        </div>
    );
}

export default CardsTable;
