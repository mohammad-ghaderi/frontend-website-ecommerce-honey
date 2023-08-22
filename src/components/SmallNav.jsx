import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/header.css'



const SmallNav = ({active,type}) => {

  let clsnm = null
  if (type==='column'){
    if (active) clsnm = 'left-nav-wrap active'
    else clsnm = 'left-nav-wrap'
  }else{
    clsnm = 'top-nav-wrap'
  }

  
  return (
    <div className={ clsnm } >
      <Nav className={type==='column'? 'left-nav':'top-small-nav'} dir='ltr'>
        <LinkContainer to={'/'}>
          <Nav.Link>صفحه اصلی</Nav.Link>
        </LinkContainer>
        <LinkContainer to={'/products'}>
          <Nav.Link>محصولات</Nav.Link>
        </LinkContainer>
        <LinkContainer to={'/weblogs'}>
          <Nav.Link>وبلاگ</Nav.Link>
        </LinkContainer>
        <LinkContainer to={'/ads'}>
          <Nav.Link>تبلیغات</Nav.Link>
        </LinkContainer>
        <LinkContainer to={'/aboutus'}>
          <Nav.Link>درباره ما</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  )
}

export default SmallNav