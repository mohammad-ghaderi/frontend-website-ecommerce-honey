import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PhoneRegister = () => {


    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    ////// کامل نشده هنوز
    const submitHandler = (e) => {
      e.preventDefault()
      console.log('hello submited');
    }
  
    return (
      <div>
        <Form className='p-3' onSubmit={submitHandler}>
          <h5 className='pb-3 fw-bold text-muted'>ورود به حساب</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-light me-1'>
              <i className="fa-solid fa-phone ms-2 text-muted"></i>
              شماره موبایل خود را وارد کنید
            </Form.Label>
            <Form.Control type="phone" value={phone} placeholder="09-- --- ----" dir='ltr' onChange={(e)=>setPhone(e.target.value)}/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='fw-light me-1'>
                  <i className="fa-solid fa-lock ms-2 text-muted"></i>
                  رمز عبور خود را وارد کنید
              </Form.Label>
              <Form.Control 
                  type="password" 
                  value={password} 
                  placeholder="رمز عبور"  
                  dir={password===''?'rtl':'ltr'} 
                  onChange={(e)=>setPassword(e.target.value)} 
                  style={{fontSize:'14px'}}
              />
                <Link to={''} className=''>رمز عبور خود را فراموش کرده ام</Link>
          </Form.Group>
          
          <Button variant="primary" type="submit" className='mt-3 w-100'>
            ورود به حساب
          </Button>
        </Form>
      </div>
    )
}

export default PhoneRegister