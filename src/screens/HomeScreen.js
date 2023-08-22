import React, { useEffect, useDispatch, useSelector, useState } from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import mainImage from '../images/topImage.jpg'
import Product from '../components/Product'
import '../styles/homeScreen.css'
import { listProducts } from '../actions/productActions'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const HomeScreen = () => {

    const products = [
        {'_id':1,},{'_id':2,},{'_id':3,},{'_id':4,},{'_id':5,},{'_id':6,},{'_id':7,},{'_id':8,},{'_id':9,},,{'_id':10,},{'_id':11,},{'_id':12,},
    ]

    let [loading,setLoading] = useState(true)
    const chng = ()=> setLoading(false)
    const myTimeout = setTimeout(chng, 3000);
    
    // const dispatch = useDispatch()
    // const productList = useSelector(state => state.productList)
    // const {error, loading, products} = productList

    // useEffect(() => {
    //   dispatch(listProducts())
    // },[dispatch])

    
    

  return (
    <>
        <div className='top-imag-wrap'>
            <div></div>
            <Image src={mainImage} />
        </div>


        <div className='mx-2 p-3'>
            <h3 className='py-4'>آخرین محصولات</h3>


            <Row>
              <Col md={10} xs={12}>
                {
                  loading ?(
                      <Row className='g-4'>
                        {
                          Array(12).fill(0).map((part,index) => (
                            <Col key={index}  sm={6} md={6} lg={4} xl={3} className='my-4'>
                              <div>
                                <SkeletonTheme  baseColor="#d9d9d9" highlightColor="#f1f1f1">
                                  <Skeleton  height={300} />
                                </SkeletonTheme>
                                <Row className='mt-1'>
                                  <Col sm={6}>
                                    <Row>
                                      <Skeleton count={2}/>
                                    </Row>
                                  </Col>
                                  <Col sm={6}>
                                    <SkeletonTheme  baseColor="#ffccbc" highlightColor="#f1f1f1">
                                      <Skeleton height={40}/>
                                    </SkeletonTheme>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    )
                    :
                    (
                      <Row className='mx-2'>
                        {products && products.map(product =>(
                          <Col key={product._id}  sm={6} md={6} lg={4} xl={3} className='gx-5 gx-md-4'>
                            <Product product={product}/>
                          </Col>
                        ))}
                      </Row>
                    )
                }
              </Col>
              <Col md={2} xs={0}></Col>
            </Row>
            
        </div>
    </>
  )
}

export default HomeScreen