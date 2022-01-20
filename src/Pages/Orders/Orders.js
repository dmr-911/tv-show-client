import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Orders.css';

const Orders = () => {
    const users = sessionStorage.getItem('orders');
    const items = JSON.parse(users);
    console.log(items);
    return (
        <Container>
        <h2 className="fw-bold mt-4">Orders <span className="text-danger">details</span></h2>
        <div class="divider mb-4 mx-auto"></div>
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
        </Table></Container>
    );
};

export default Orders;