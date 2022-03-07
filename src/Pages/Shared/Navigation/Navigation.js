import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../images/nav/logo.png';
import store from '../../../redux/store';

const Navigation = () => {
    const {cart} = store.getState();
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="home">
                <img
                 src={logo}
                 width="150"
                 height="60"
                 className="d-inline-block align-top"
                 alt="React Bootstrap logo"
               />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link as={Link} to="home"><b>Home</b></Nav.Link>
                <Nav.Link as={Link} to="orders"><b>Orders</b></Nav.Link>
                <Nav.Link as={Link} to="about"><b>About</b></Nav.Link>
                <Nav.Link className="mx-2" as={Link} to="/cart">
                        <span className="nav-icon nav-cart">
                            <span className="nav-text">{cart?.length}</span>
                        </span>
                    </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Navigation;