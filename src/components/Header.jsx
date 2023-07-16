import React from 'react';
import { Navbar, Nav, Container, Row, Image} from 'react-bootstrap';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header class="sticky-top">
        <Navbar expand="lg" variant='light' bg='light' className='border-bottom border-secondary p-0'>
            <Container className=''>
                <Navbar.Brand href="" className='fs-2 m-0'>
                    <Image src={logo} sizes='100%' height={50} />
                </Navbar.Brand>
                <Nav className="me-auto d-flex flex-row fs-5 py-2">
                    <Nav.Link className='px-2 '><i className='fas fa-user fs-2'></i></Nav.Link>
                    <Nav.Link className='px-2 '><i className='fas fa-shopping-cart fs-2'></i></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header