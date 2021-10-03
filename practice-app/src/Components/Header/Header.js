import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="mx-auto">
                        <NavLink className="menu" to="/home">Home</NavLink>
                        <NavLink className="menu" to="/todos">todos</NavLink>
                        <NavLink className="menu" to="/about">About</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;