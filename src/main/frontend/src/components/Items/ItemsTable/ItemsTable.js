import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

const ItemsTable = () => {
    const [data, setData] = useState([]);

    async function loadData() {
        let response = await fetch('http://localhost:8080/allitems');
        let tableData = await response.json();
        setData(tableData);
    }

    useEffect( () => {
        loadData();
    }, [] )

    return (
        <Table striped bordered hover size={'sm'}>
            <thead className={'thead-dark'}>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>PRICE</td>
                <td>AMOUNT</td>
            </tr>
            </thead>
            <tbody>
            {data?.map(row => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>${row.price}</td>
                    <td>{row.amount}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default ItemsTable;
