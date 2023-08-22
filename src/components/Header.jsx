import React, { useState } from 'react';
import { Navbar, Nav, Image, CloseButton, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../images/logo.png'
import '../styles/header.css'
import SmallNav from './SmallNav'


const Header = () => {

    const [leftNavActive, setLeftNavActiva] = useState(false)
    const toggleNav = () =>{ setLeftNavActiva(!leftNavActive) }


  return (
    <>
        <header className='sticky-top'>
            <Navbar expand="lg" variant='light' bg='light' className='py-0 navbar-wrap'>
                <div className='wrap-element'>

                    {leftNavActive?(
                        <CloseButton onClick={toggleNav} className='hamburger'/>
                        ):(
                        <Navbar.Toggle  onClick={toggleNav} className='hamburger'/>
                    )}
                    
                    <LinkContainer to={'/'}>
                        <Navbar.Brand className='m-0 p-0'>
                            <Image src={logo} sizes='100%' height={50} />
                        </Navbar.Brand>
                    </LinkContainer>




                    <Nav className=" d-flex flex-row fs-5">

                        <SmallNav active={false} type={'row'}/>

                        <LinkContainer to={'/login'}>
                            <Nav.Link className='px-2 '><i className='fas fa-user fs-2'></i></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/cart'}>
                            <Nav.Link className='px-2 '><i className='fas fa-shopping-cart fs-2'></i></Nav.Link>
                        </LinkContainer>

                    </Nav>
                </div>
            </Navbar>
        </header>
        
        <SmallNav active={leftNavActive} type={'column'} />
        
    </>
  )
}

export default Header
