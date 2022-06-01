import React from 'react'
import { Button, Table } from 'react-bootstrap'
import products from '../products'

export default function Cart() {
  return (
    <div>
        <h4>Twoje produkty</h4>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nazwa</th>
                <th>Ilość [t]</th>
                <th>Cena</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>{products[0].name}</td>
                <td>8.5</td>
                <td>{products[0].price.toFixed(1) * 101.5 }</td>
                </tr>
                <tr>
                <td>2</td>
                <td>{products[1].name}</td>
                <td>2</td>
                <td>{products[1].price.toFixed(1) * 200 }</td>
                </tr>
                <tr>
                <td>3</td>
                <td>{products[2].name}</td>
                <td>12</td>
                <td>{products[1].price.toFixed(1) * 500 }</td>
                </tr>
            </tbody>
        </Table>
        <h3>Do zapłaty: 39 952.5 zł</h3>
        <Button>Zapłać</Button>
    </div>
  )
}
