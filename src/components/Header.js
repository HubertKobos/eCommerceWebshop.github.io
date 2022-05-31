import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className='px-3'>Handel i Usługi Transportowe</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <LinkContainer to="/">
                        <Nav.Link className="px-3">Strona Główna</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <Nav.Link>Koszyk<i className="fa-solid fa-cart-shopping px-1"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Kontakt<i className="fa-solid fa-address-book px-1"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Login<i className="fas fa-user px-1"></i></Nav.Link>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header