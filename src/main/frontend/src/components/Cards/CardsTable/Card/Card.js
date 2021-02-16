import {Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div className="col-sm-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.date}</p>
                    <Link to={"/" + props.id} className="btn btn-dark">DETAILS</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
