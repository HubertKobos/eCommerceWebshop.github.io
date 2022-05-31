import React from 'react'
import {Navbar, Nav, Container, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { setFalseValue, setTrueValue } from '../reducers/loginModalSlice'

function Header() {
    const dispatch = useDispatch()
  return (
    <div>
        <Navbar bg="light" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/eCommerceWebshop.github.io">
                    <Navbar.Brand className='px-3'>Handel i Usługi Transportowe</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <LinkContainer to="/eCommerceWebshop.github.io">
                        <Nav.Link className="px-3">Strona Główna</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/eCommerceWebshop.github.io/cart">
                        <Nav.Link>Koszyk<i className="fa-solid fa-cart-shopping px-1"></i></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/eCommerceWebshop.github.io/contact">
                        <Nav.Link>Kontakt<i className="fa-solid fa-address-book px-1"></i></Nav.Link>
                    </LinkContainer>
                        {/* <Nav.Link>Login<i className="fas fa-user px-1"></i></Nav.Link> */}
                        <Button onClick={() => {
                            dispatch(setTrueValue())
                        }}>Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header