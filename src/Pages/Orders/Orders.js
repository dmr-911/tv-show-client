import React from 'react';
import { Table } from 'react-bootstrap';
import './Orders.css';

const Orders = () => {
    const users = sessionStorage.getItem('orders');
    const items = JSON.parse(users);
    console.log(items);
    return (
        <Table striped bordered hover size="sm" responsive>
        <thead>
            <tr>
            <th>Buyer Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Item</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(item =><tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.country}</td>
                    <td>{item.productName}</td>
                    </tr>)
            }
        </tbody>
        </Table>
    );
};

export default Orders;