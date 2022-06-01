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
        <div className='RegisterModalContainer' style={{height: '1000'}}>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Potwierdź hasło</Form.Label>
                    <Form.Control type="password" placeholder="Wpisz hasło" className='text-center' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imię*</Form.Label>
                    <Form.Control type="text" placeholder="Wpisz imię" className='text-center' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nazwisko*</Form.Label>
                    <Form.Control type="text" placeholder="Wpisz nazwisko" className='text-center' />
                </Form.Group>
                <div style={{alignItems: 'center', justifyContent: 'center'}} >
                    <Button variant="primary" type="submit" style={{margin:5, width:90, height:40 }}>
                        Rejestruj
                    </Button>
                    <Button variant="danger" type="submit" style={{margin:5, width:76, height:40, display: 'block', marginLeft: '41.2%' }} onClick={() => {dispatch(setTrueValue()); dispatch(setRegisterFalseValue())}}>
                        Wróć
                    </Button>
                </div>
            </Form>
            </div>
            <div className='footer text-center' style={{position: 'relative', bottom: -10}}>
                <Button variant="link" onClick={() => {dispatch(setFalseValue()); dispatch(setRegisterFalseValue())}}>Kontynuuj bez rejestracji</Button>
            </div>
        </div>
    </div>
  )
}
