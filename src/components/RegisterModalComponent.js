import React from 'react'
import '../stylesheets/LoginRegisterModals.css'
import { Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { setRegisterFalseValue } from '../reducers/registerModalSlice'
import { setFalseValue, setTrueValue } from '../reducers/loginModalSlice'

export default function LoginModal() {
    const dispatch = useDispatch()

  return (
    <div className='modalBackground'>
        <div className='RegisterModalContainer' style={{height: '35vh'}}>
            <div className='title text-center'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='text-center'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" className='text-center' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" className='text-center' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Password" className='text-center' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Password" className='text-center' />
                </Form.Group>
                <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="primary" type="submit" style={{margin:5, width:76, height:40 }}>
                        Submit
                    </Button>
                    <Button variant="danger" type="submit" style={{margin:5, width:76, height:40, display: 'block', marginLeft: '41.2%' }} onClick={() => {dispatch(setTrueValue()); dispatch(setRegisterFalseValue())}}>
                        Back
                    </Button>
                </div>
            </Form>
            </div>
            <div className='footer text-center' style={{position: 'relative', bottom: -40}}>
                <Button variant="link" onClick={() => {dispatch(setFalseValue()); dispatch(setRegisterFalseValue())}}>Continue without registering</Button>
            </div>
        </div>
    </div>
  )
}
