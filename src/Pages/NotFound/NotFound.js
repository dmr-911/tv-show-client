import React from 'react';
import { Container } from 'react-bootstrap';
import nf from '../../images/nf.jpg';

const NotFound = () => {
    return (
        <Container>
            <img src={nf} className="img-fluid" alt="page not found" />
        </Container>
    );
};

export default NotFound;