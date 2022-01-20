import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    const navigate = useNavigate();
    const handleClick =() =>{
        navigate('/about');
    };
    return (
<Container fluid id="banner">
            <Row md={2} xs={1} className="h-100">
                <Col></Col>
                <Col className="h-100 d-flex justify-content-center align-items-center">
                <div>
                <h3 className="fs-1 text-white" style={{height: '100px'}}>
                    <Typewriter
                    
                    options={{
                        autoStart: true,
                        loop: true
                    }}
                    onInit={(typeWriter)=>{
                        typeWriter.typeString("A TvMaze production. Interactive website to book your favorite tv show.")
                        .pauseFor(2000)
                        .start()
                    }}
                    />
                </h3>
                <button onClick={handleClick} className="btn-banner d-inline mt-5">About Us</button>
            </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Banner;