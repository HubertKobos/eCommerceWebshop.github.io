import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'

import products from '../products'
import Product from '../components/Product'


function HomeScreen() {
    
    // Because of deployment reasons changed API for data from list
    // const [products, setProducts] = useState([])

    // useEffect(() =>{
    //     async function fetchProducts(){
    //         const {data} = await axios.get('/products/')
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // }, [])
    console.log(products[0])
  return (
    <div>
        <h1>Produkty, które oferujemy</h1>
        <Row>
            {products.map(product => {
                return(
                    <Col key={product.id} sm={12} md={6} lg={3.5} xl={4}>
                        <Product product={product}/>
                    </Col>
                )
            })}
        </Row>
    </div>
  )
}

export default HomeScreen
//42a