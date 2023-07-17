import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productImage from '../images/8.jpg'
import Rating from './Rating'
import '../main.css'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded' style={{height:'380px'}}>
        <Link to={`/product/${product._id}`} className='product-image-wrap' >
            <Card.Img src={productImage}/>
        </Link>

        <Card.Body>
            <Link to={`/product/${product._id}`} className='text-decoration-none fw-900 fs-5'>
                <Card.Title as="div">
                    <strong style={{color:'#444'}}>عسل طبیعی</strong>
                </Card.Title>
            </Link>
            
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={3.5} text={`25 نظر`} color={'#f8e825'}/>
                </div>
            </Card.Text>
            <div className='d-flex justify-content-between align-items-center'>
                    <Card.Text as="h6">
                        122 هزارتومان
                    </Card.Text>

                    <Button >خرید</Button>
            </div>
           

        </Card.Body>
    </Card>
  )
}

export default Product