import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css';
import movie from '../../images/movie.png';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {id} = useParams();
    const {products} = useAuth();
    const matchedItem = products.find(product => parseInt(product.show.id) === parseInt(id));
    console.log(matchedItem);

    
    return (
        <Container>
            <Row xs={1} md={2} className="my-5">
            <Col xs={12} md={4}>
        {
            matchedItem ? 
            <Card className="p-3 details-cart">
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="text-white px-2" style={{backgroundColor : '#24409c'}}>
                            <span>{matchedItem?.show?.genres[0]}</span>
                        </div>
                        <span className="far fa-heart favorite"></span>
                    </div>
                </div>
                <Card.Img variant="top" src={matchedItem?.show?.image.original} height="140" />
                <Card.Body>
                <Card.Title>{matchedItem?.show?.name.slice(0,24)}</Card.Title>
                <hr />
                <div>
                        <div className="">
                            <p><b>Rating: {matchedItem?.show?.rating.average ? matchedItem?.show?.rating.average : 0} / 10</b></p>
                            <p><small>Status : {matchedItem?.show?.status} </small></p>
                        </div>
                        <h6 className="fw-bold">Details</h6>
                        <span dangerouslySetInnerHTML={{__html: matchedItem?.show?.summary}} >
                        </span>
                    </div>
                <button className="btn-products">Buy ticket</button>
                </Card.Body>
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
        <Col xs={12} md={8}><img className="img-fluid" src={movie} alt="" /></Col>
            </Row>
        </Container>
    );
};

export default Details;