import React from 'react'
import { Image } from 'react-bootstrap'
import mainImage from '../images/topImage.jpg'

const HomeScreen = () => {
  return (
    <div style={{position:'relative',}}>
      <div style={{backgroundColor:'#00000080', width:'100%',height:'100%',position:'absolute'}}></div>
      <Image src={mainImage} fluid/>
    </div>
  )
}

export default HomeScreen