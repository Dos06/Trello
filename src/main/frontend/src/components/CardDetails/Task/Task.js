import {useState} from "react";
import {Form} from "react-bootstrap";

const Task = (props) => {
    const [task, setTask] = useState(props.task);
    const [done, setDone] = useState(props.task.done)
    const [message, setMessage] = useState("");

    const doneHandler = () => {
        setDone(!done)
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
                    <Form>
                        <Form.Check type="switch" id={'switch' + task.id} onChange={ () => doneHandler() } checked={task.done} label={'Done'}/>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Task;
