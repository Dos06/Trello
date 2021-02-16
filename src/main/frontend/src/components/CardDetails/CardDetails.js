import {useEffect, useState} from "react";
import Task from "./Task/Task";
import AddForm from "./AddForm/AddForm";

const CardDetails = (props) => {
    console.log(props.id + ' id')
    const [data, setData] = useState([]);

    async function loadData() {
        let response = await fetch('http://localhost:8080/' + props.id);
        let tableData = await response.json();
        setData(tableData);
    }

    useEffect( () => {
        loadData();
    }, [] )


    return (
        <div>
            <div className="alert alert-secondary">
                A simple secondary alert!
            </div>
            
            <div className="mt-4">
                <AddForm cardId={props.id}/>
            </div>

            <div>
                <div className="row">
                    {/*{console.log(data)}*/}
                    {(data.length > 0) ? data.map(t => (
                        <Task id={t.id} name={t.name} date={t.date} done={t.done} card={t.card.id}/>
                    )) : console.log('ahah' + data)}
                </div>
            </div>
        </div>
    );
}

export default CardDetails;