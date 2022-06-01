import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h1>Kontakt</h1>
        <h4>Możesz skontaktować się z nami przy pomocy poniższego formularza lub zadzwoń: 512-123-987</h4>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Imię:</Form.Label>
                <Form.Control type="text" placeholder="Wpisz imię" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Wpisz adres email" />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Wiadomość do nas:</Form.Label>
                <Form.Control as="textarea" placeholder="Napisz wiadomość..."  rows={3}/>
            </Form.Group >
            <Button variant="primary" type="submit">Wyślij</Button>
        </Form>
    </div>
  )
}
