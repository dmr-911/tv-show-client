import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../images/nav/logo.png';

const Navigation = () => {
    return (
        <Navbar className="navigation-bg" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand as={Link} to="home">
                {/* <img src={logo} alt="" /> */}
                <img
        src={logo}
        width="150"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="home"><b>Home</b></Nav.Link>
                <Nav.Link as={Link} to="dashboard"><b>Dashboard</b></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navigation;