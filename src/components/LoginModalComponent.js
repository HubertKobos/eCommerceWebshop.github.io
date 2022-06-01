import React from 'react'
import '../stylesheets/LoginRegisterModals.css'
import { Form, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { setFalseValue } from '../reducers/loginModalSlice'
import { setRegisterTrueValue } from '../reducers/registerModalSlice'
export default function LoginModal() {
    const dispatch = useDispatch()

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title text-center'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Wpisz adres email" className='text-center'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hasło</Form.Label>
                    <Form.Control type="password" placeholder="Wpisz hasło" className='text-center' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Zaloguj
                </Button>
            </Form>
            </div>
            <div className='body'>
                <p className='mb-0'>Nie masz konta ?</p>
                    <Button variant="link" onClick={() => {dispatch(setFalseValue()); dispatch(setRegisterTrueValue())}}>Zarejestruj się</Button>
            </div>
            <div className='footer text-center'>
                <Button variant='danger' onClick={() => {dispatch(setFalseValue())}}>Zamknij</Button>
            </div>
        </div>
    </div>
  )
}
