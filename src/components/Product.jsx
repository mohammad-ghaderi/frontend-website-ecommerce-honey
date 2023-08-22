import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import productImage from '../images/new.jpg'
import productImage from '../images/8.jpg'
import Rating from './Rating'
import '../styles/product.css'
import dropImage from '../images/droped.png'

const Product = ({product}) => {
  return (
    <>
    
    <Card className='my-3 rounded card-main' >
        
        <Link to={`/product/${product._id}`} >
            <Image src={dropImage} fluid className='top_hony-drop'/>
            <div className='product-image-wrap' >
                <Image src={productImage} fluid/>
            </div>
        </Link>

        <Card.Body className='border-top mt-4 '>
            <Link to={`/product/${product._id}`} className='text-decoration-none fw-900 fs-6 '>
                <Card.Title as="div" className='mb-2'>
                    <strong style={{color:'#444'}}>عسل طبیعی</strong>
                </Card.Title>
            </Link>
            
            
            <div className='d-flex justify-content-between align-items-center'>
                <Card.Text as="h6" className='fs-6'>
                    122 هزارتومان
                </Card.Text>

                <Button variant='warning'><strong>خرید</strong></Button>
            </div>
           

        </Card.Body>
    </Card>
    </>
  )
}

export default Product