import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './BuyTicket.css';
import movie from '../../images/aside.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { addToDb } from '../../utilities/storage';

const BuyTicket = () => {
    const {id} = useParams();
    const {products} = useAuth();
    const navigate = useNavigate();
    const matchedItem = products.find(product => parseInt(product.show.id) === parseInt(id));
    const [details, setDetails] = useState({
        productName : matchedItem?.show.name,
        genre : matchedItem?.show.genres[0]
    });
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newDetails = {...details};
        newDetails[field] = value;
        setDetails(newDetails);
    };

    const handlePurchase = e =>{
        e.preventDefault();
        addToDb(id, details.name, details.email, details.country, details.productName);
        navigate('/orders')
    };
    return (
        <Container>
            <h2 className="fw-bold mt-4">Buyer <span className="text-danger">information</span></h2>
            <div className="divider mb-4 mx-auto"></div>
            <Row xs={1} md={2} className="mb-5 g-4">
            <Col xs={12} md={6}><img className="img-fluid" src={movie} alt="" /></Col>
            <Col xs={12} md={6}>
        {
            matchedItem ? 
            <Card className="p-3 details-cart">
            <form onSubmit={handlePurchase}>
                <label htmlFor="productName"><b>Show name</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="productName"
                    className="green-form-email green-form-control" 
                    type="text" 
                    placeholder="Product Name" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="genre"><b>Genre</b></label><br />
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="genre"
                    className="green-form-email green-form-control" 
                    type="text" 
                    placeholder="Genre" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="name"><b>Name</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="name"
                    className="green-form-email green-form-control" 
                    type="text" 
                    placeholder="Enter your name" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="email"><b>Email</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="email"
                    className="green-form-email green-form-control" 
                    type="email" 
                    placeholder="Enter email" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="phone"><b>Phone</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="phone"
                    className="green-form-email green-form-control" 
                    type="number" 
                    placeholder="Enter phone number" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="city"><b>City</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="city"
                    className="green-form-email green-form-control" 
                    type="text" 
                    placeholder="Enter city" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <label htmlFor="country"><b>Country</b></label><br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                    name="country"
                    className="green-form-email green-form-control" 
                    type="text" 
                    placeholder="Enter country" 
                    onBlur={handleOnBlur}
                    />
                </Form.Group>
                <Button className="purchase-btn" variant="primary" type="submit">
                    Purchase
                </Button>
            </form>
          </Card>
            : 
            <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
            <div>
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
            </div>
          </div>
        }
        </Col>
            </Row>
        </Container>
    );
};

export default BuyTicket;