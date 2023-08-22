import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmailRegister = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('hello submited');
    }


  return (
    <div>
      <Form className='p-3' onSubmit={submitHandler}>
        <h5 className='pb-3 fw-bold text-muted'>ایجاد حساب</h5>
        <Form.Group controlId='name' className='my-1'>
            <Form.Control
                type='name'
                required
                placeholder='نام خود را وارد کنید'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                style={{fontSize:'14px'}}
            >
            </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-light me-1'>
                <i className="fa-solid fa-envelope ms-2 text-muted"></i>
                ایمیل خود را وارد کنید
            </Form.Label>
            <Form.Control 
                type="email" 
                value={email} 
                placeholder="@gmail.com" 
                dir='ltr' 
                onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fw-light me-1' >
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
                type="confirm" 
                value={confirmPassword} 
                placeholder="تکرار رمز عبور" 
                dir={confirmPassword===''?'rtl':'ltr'} 
                onChange={(e)=>setConfirmPassword(e.target.value)} 
                style={{fontSize:'14px'}}
            />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='mt-1 w-100'>
          ایجاد حساب
        </Button>
      </Form>
    </div>
  )
}

export default EmailRegister