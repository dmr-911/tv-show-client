import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';
import about from '../../images/about.jpg'

const About = () => {
    return (
        <Container fluid>
            <img src={about} alt="" className="img-fluid" />
        </Container>
    );
};

export default About;