import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {
    const {image, name, status, rating, genres, id} = product.show;
    const handleClick = id =>{
        // navigate(`/order/${id}`);
        console.log(id);
    };
    return (
        <Col>
        <Card className="p-3 digital-cart">
            <div>
                <div className="d-flex justify-content-between">
                    <div className="bg-danger text-white px-2">
                        <span>{genres[0]}</span>
                    </div>
                    <span className="far fa-heart favorite"></span>
                </div>
            </div>
            <Card.Img variant="top" src={image.original} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <div>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p><small>Score: ${product.score}</small></p>
                        <p><small>Status : {status} </small></p>
                    </div>
                    <div>
                        <p>
                            Rating : {rating.average}
                        </p>
                    </div>
                </div>
            </div>
            <button className="btn-products" onClick={()=>handleClick(id)}>Order Now</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Product;