import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ButtonGroup, ToggleButton, Image, ListGroup } from 'react-bootstrap'
import '../styles/login.css'
import EmailLogin from '../components/EmailLogin'
import PhoneLogin from '../components/PhoneLogin'
import googleImage from '../images/google-logo.svg'
import telegramImage from '../images/telegram-logo.svg'
import phoneImage from '../images/phone-logo.svg'
import emailImage from '../images/email-logo.svg'

const LoginScreen = () => {

  const [personType,setPersonType] = useState('buyer')
  const [submitType,setSubmitType] = useState('email')

  const keys = [0,1,2,3]
  const types = {
    0:{
      name:'phone',
      img: phoneImage,
      text: 'ورود از طریق شماره موبایل'
    },
    1:{
      name:'email',
      img: emailImage,
      text: 'ورود از طریق ایمیل'
    },
    2:{
      name:'google',
      img: googleImage,
      text: 'ورود از طریق گوگل'
    },
    3:{
      name:'telegram',
      img: telegramImage,
      text: 'ورود از طریق تلگرام'
    }
  }

  return (
    <div className='login-submit-wrapp' style={{fontSize:'14px'}}>
      <div className='login--wrap'>
        
        <ButtonGroup className='top--section'>
          <ToggleButton
            id='buyer'
            type='radio'
            name='personTypeLogin'
            variant='light'
            value={'buyer'}
            checked={personType==='buyer'}
            onChange={(e) => setPersonType('buyer')}
            className='py-2 fw-bold buyer--btn'
          >
            خریدار
          </ToggleButton>
          <ToggleButton
            id='seller'
            type='radio'
            name='personTypeLogin'
            variant='light'
            value={'seller'}
            checked={personType==='seller'}
            onChange={(e) => setPersonType('seller')}
            className='py-2 fw-bold seller--btn'
          >
            فروشنده
          </ToggleButton>
        </ButtonGroup>

        <div className='main--content'>
          { submitType==='email' ? <EmailLogin type={personType}/> : <PhoneLogin type={personType}/> }
        </div>

        <div className='submit--type px-3 pb-3'>
            هنوز ثبت نام نکرده ام؟ 
          <Link to={'/register'}>
            ایجاد حساب
          </Link>
          <ListGroup className='mt-4'>
            {
              keys.map((i) => (
                types[i].name!==submitType && 
                  <ListGroup.Item key={i} onClick={() => setSubmitType(types[i].name)}>
                    <Row>
                      <Col xs={3}>
                        <Image src={types[i].img} fluid width={25} height={25}/>
                      </Col>
                      <Col xs={9} className='text-muted'>{types[i].text}</Col>
                    </Row>
                  </ListGroup.Item>
              ))
            }
          </ListGroup>
        </div>
    
      </div>
    </div>
  )
}

export default LoginScreen