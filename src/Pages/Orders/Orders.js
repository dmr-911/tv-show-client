import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './Orders.css';

const Orders = () => {
    const users = sessionStorage.getItem('orders');
    const items = JSON.parse(users);
    return (
        <Container>
        <h2 className="fw-bold mt-4">Orders <span className="text-danger">details</span></h2>
        <div className="divider mb-4 mx-auto"></div>
        {
            items ?
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
            : 
            <h4 className="text-danger">No ordered items!</h4>
        }
        </Container>
    );
};

export default Orders;