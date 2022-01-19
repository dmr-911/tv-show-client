import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css';
import movie from '../../images/movie.jpg';

const Details = () => {
    const {id} = useParams();
    
    return (
        <Container>
            <Row xs={1} md={2}>
        <Col>
        {/* <Card className="p-3 digital-cart">
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
        </Card> */}
        </Col>
        <Col><img className="img-fluid" src={movie} alt="" /></Col>
            </Row>
        </Container>
    );
};

export default Details;