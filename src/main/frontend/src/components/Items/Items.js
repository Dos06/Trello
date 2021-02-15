import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from "./AddForm/AddForm";
import ItemsTable from "./ItemsTable/ItemsTable";

const Items = () => {
    return (
        <div>
            <AddForm/>
            <ItemsTable/>
        </div>
    );
}

export default Items;
