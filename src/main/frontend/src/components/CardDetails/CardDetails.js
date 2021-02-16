import {useEffect, useState} from "react";
import Task from "./Task/Task";
import AddForm from "./AddForm/AddForm";
import DbService from "../../_services/DbService";

const CardDetails = (props) => {
    const [card, setCard] = useState({});
    const [tasks, setTasks] = useState([]);

    const loadData = () => {
        DbService.getCard(props.id).then( response => {
            setCard(response.data);
        });
        DbService.getTasksByCard(props.id).then( response => {
            setTasks(response.data);
        });
    }

    useEffect( () => {
        loadData();
    }, [] )

    return (
        <div>
            <div className="alert alert-secondary">
                <h1>{card.name}</h1>
                <h2>{card.date}</h2>
            </div>

            <div className="mt-4">
                <AddForm cardId={card.id}/>
            </div>

            <div>
                <div className="row">
                    {tasks.map(t => (
                        <Task key={t.id} id={t.id} name={t.name} date={t.date} done={t.done} card={t.card.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardDetails;