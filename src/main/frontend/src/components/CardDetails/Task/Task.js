const Task = (props) => {
    return (
        <div className="col-sm-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.date}</p>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label">Done</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
