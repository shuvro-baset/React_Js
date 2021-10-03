import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/todos">todos</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;