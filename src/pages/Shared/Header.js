import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>logo</Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <NavLink  className='mx-2 fw-semibold' to='/signup'>signup</NavLink>
           <NavLink className='mx-2 fw-semibold' to='/login'>login</NavLink>
            
           
          </Nav>
          <Nav>
           
          <NavLink className='btn btn-primary mx-2' to='/login'>login</NavLink>
        <NavLink className='btn btn-primary' to='/signup'>signup</NavLink>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;