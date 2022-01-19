import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {image, name, status, rating, genres, id} = product.show;
    const navigate = useNavigate();
    const handleClick = id =>{
        navigate(`/movies/${id}`);
        console.log(id);
    };
    return (
        <Col>
        <Card className="p-3 digital-cart">
            <div>
                <div className="d-flex justify-content-between">
                    <div className="text-white px-2" style={{backgroundColor : '#24409c'}}>
                        <span>{genres[0]}</span>
                    </div>
                    <span className="far fa-heart favorite"></span>
                </div>
            </div>
            <Card.Img variant="top" src={image.original} height="140" />
            <Card.Body>
            <Card.Title>{name.slice(0,24)}</Card.Title>
            <hr />
            <div>
                    <div className="text-start">
                        <p><b>Score: {product.score}</b></p>
                        <p><small>Status : {status} </small></p>
                    </div>
                    <div>
                        <p>
                            <b>Rating : {rating.average ? rating.average : 0} / 10</b>   
                        </p>
                    </div>
                </div>
            <button className="btn-products" onClick={()=>handleClick(id)}>Details</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Product;