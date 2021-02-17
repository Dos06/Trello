import {useState} from "react";

const Task = (props) => {
    const [task, setTask] = useState(props.task);
    const [message, setMessage] = useState("");

    const checkboxHandler = () => {
        task.done = !task.done
        editTask(task)
    }

    async function editTask(task) {
        const response = await fetch('http://localhost:8080/editTask', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(task)
        });

        let messageData = await response.json();
        setMessage(messageData.id ? 'Edited: ' + messageData : 'Error')
    }


    return (
        <div className="col-sm-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.date}</p>
                    <div className="form-group form-check m-0">
                        <input type="checkbox" className="form-check-input" onChange={ () => checkboxHandler() } checked={task.done}/>
                        <label className="form-check-label">Done</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
