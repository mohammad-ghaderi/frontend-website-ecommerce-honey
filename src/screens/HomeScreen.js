import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'
import mainImage from '../images/topImage.jpg'
import Product from '../components/Product'

const HomeScreen = () => {

    const products = [
        {'_id':1,},{'_id':2,},{'_id':3,},{'_id':4,},{'_id':5,},{'_id':6,},{'_id':7,},{'_id':8,},{'_id':9,},
    ]


  return (
    <>
        <div style={{position:'relative',}}>
            <div style={{backgroundColor:'#00000080', width:'100%',height:'100%',position:'absolute'}}></div>
            <Image src={mainImage} fluid/>
        </div>

        <Container>
            <h3 className='py-4'>آخرین محصولات</h3>
            <Row>
              {products && products.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='gx-5 gx-md-4'>
                  <Product product={product}/>
                </Col>
              ))}
            </Row>
        
        </Container>
    </>
  )
}

export default HomeScreen