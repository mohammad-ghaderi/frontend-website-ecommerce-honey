import React from 'react'
import { Image, Row, Col, Container, ListGroup, Button, Card, Form } from 'react-bootstrap'
import imagePath from '../images/8.jpg'
import Rating from '../components/Rating'
import dropImage from '../images/droped.png'
import '../styles/product.css'


const ProductScreen = () => {
    
  return (
    <Container>
        
        <Row className='mt-4'>

            <Col md={5} >
                <Row>
                    <Col xs={2}>
                        <div className='other-image-wrap'>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                        </div>
                    </Col>

                    <Col xs={10}>
                        <ListGroup>
                            <ListGroup.Item>
                                <Image src={imagePath} alt={'product.name'} fluid width={300}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                
            </Col>

            <Col md={4}>
                <ListGroup variant='flush' className='middleGroup'>
                    <Image src={dropImage} className='d-none d-md-block'/>
                    <ListGroup.Item >
                        <h3 >عسل طبیعی</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating value={3.5} text={`25 نظر`} color={'#ffc107'}/>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        قیمت : 23 هزار تومان
                    </ListGroup.Item>

                    <ListGroup.Item className='d-block d-md-none'>
                        توضیحات:
                        <p>
                        عسل تست 200 گرمی حاوی عسل چندگیاه و تنها عسل تست200 گرمی می باشد که مجموعه آهوتا برای اینکه تمامی عزیزان بتوانند قدرت خرید داشته باشند، تعبیه دیده است. عسل چندگیاه همانطور که از نامش پیداشت از شهد چندین گیاه توسط زنبوران عسل تهیه می شود. نوع شهد مورد استفاده آن ها بستگی به پوشش گیاهی منطقه ای که کندو ها در آنجا قرار گرفته اند، دارد. این عسل در فصل تابستان برداشت می شود.
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={3} className='order-wrap'>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>قیمت:</Col>
                                <Col>
                                    <strong>22 هزار تومان</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>وضعیت:</Col>
                                <Col>
                                    موجود
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row className="d-flex">
                                <Col xs={6}>تعداد:</Col>
                                <Col xs='auto' className='mb-1'>
                                    <Form.Control
                                        as="select"
                                        value={'1'}
                                        onChange={(e)=>console.log('value changed')}
                                    >
                                        {
                                            [...Array(5).keys()].map((x) =>(
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                className='btn-block w-100 py-3 fs-5' 
                                disabled={false} 
                                type='button'
                            >
                                افزودن به سبد خرید
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>

            <Col md={9} className='d-none d-md-block pt-4'>
                <ListGroup >
                    <ListGroup.Item>
                        توضیحات:
                        <p>
                        عسل تست 200 گرمی حاوی عسل چندگیاه و تنها عسل تست200 گرمی می باشد که مجموعه آهوتا برای اینکه تمامی عزیزان بتوانند قدرت خرید داشته باشند، تعبیه دیده است. عسل چندگیاه همانطور که از نامش پیداشت از شهد چندین گیاه توسط زنبوران عسل تهیه می شود. نوع شهد مورد استفاده آن ها بستگی به پوشش گیاهی منطقه ای که کندو ها در آنجا قرار گرفته اند، دارد. این عسل در فصل تابستان برداشت می شود
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        
    </Container>
  )
}

export default ProductScreen