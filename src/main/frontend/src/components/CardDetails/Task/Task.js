import {useState} from "react";
import {Form} from "react-bootstrap";
import DbService from "../../../_services/DbService";

const Task = (props) => {
    const [task, setTask] = useState(props.task);
    const [done, setDone] = useState(props.task.done)

    const doneHandler = () => {
        setDone(!done)
        task.done = !task.done
        editTask(task)
    }

    async function editTask(task) {
        await DbService.editTask(task)
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
