import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default class ShopNav extends Component {
    render() {
        return (
            <Navbar className="ShopNav" sticky="top" bg="light" expand="sm">
                <Link to="/">
                    <Navbar.Brand>
                        <Image className="ShopNav_image" src={require('../../static/img/Zid.jpg')} fluid roundedCircle />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Link to="/cart">
                            <Button variant="info">
                                Cart
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        );
    }
}