import React, { useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './BuyTicket.css';
import movie from '../../images/aside.jpg';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { addToDb } from '../../utilities/storage';

const BuyTicket = () => {
    const {id} = useParams();
    const {products} = useAuth();
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
        addToDb(details.name, id, details.email, details.country);
        console.log(details);
    };
    return (
        <Container>
            <h2 className="fw-bold my-4">Buyer <span className="text-danger">information</span></h2>
            <Row xs={1} md={2} className="mb-5 g-4">
            <Col xs={12} md={6}><img className="img-fluid" src={movie} alt="" /></Col>
            <Col xs={12} md={6}>
        {
            matchedItem ? 
            <Card className="p-3 details-cart">
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handlePurchase}>
                <label htmlFor="productName"><b>Item name</b></label><br />
                <input defaultValue={matchedItem?.show.name} name="productName" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Product Name" required/><br />
                <label htmlFor="genre"><b>Genre</b></label><br />
                <input defaultValue={matchedItem?.show.genres[0]} name="genre" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Product Name" required/><br />
                <label htmlFor="name"><b>Name</b></label><br />
                <input name="name" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Name" required/><br />
                <label htmlFor="productName"><b>Email</b></label><br />
                <input name="email" type="email" className="purchase-input" onBlur={handleOnBlur} placeholder="email" required/><br />
                <label htmlFor="phone"><b>Phone</b></label><br />
                <input name="phone" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Phone" required/><br />
                <label htmlFor="city"><b>City</b></label><br />
                <input name="city" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="City" required/><br />
                <label htmlFor="country"><b>Country</b></label><br />
                <input name="country" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Country" required/><br />
                <input type="submit" value="Purchase" className="purchase-input btn-danger" required/>
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