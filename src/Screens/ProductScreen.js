import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import products from '../products'
export default function ProductScreen() {
    // Because of deployment reasons I changed API for data from list
    const { id } = useParams() // dynamic params from URL
    const [product, setProduct] = useState([])
    
    // useEffect(() =>{
    //     async function fetchProducts(){
    //         const {data} = await axios.get(`/product/${id}`)
    //         setProduct(data)
    //     }
    //     fetchProducts()
    // }, [])
    
    useEffect(() =>{
        async function fetchProducts(){
            // const {data} = await axios.get(`/product/${id}`)
            setProduct(products[id-1])
        }
        fetchProducts()
    }, [])
    // console.log(products[id])
    // setProduct(products[id])
    return (
        <div>
            <Link to="/eCommerceWebshop.github.io/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={require(`../resources/05.jpg`)} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"} />
                        </ListGroupItem>

                        <ListGroupItem>
                            Cena: {product.price} zł/t
                        </ListGroupItem>

                        <ListGroupItem>
                            Opis: {product.description}
                        </ListGroupItem>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Cena: </Col>
                                        <Col>
                                            <strong>zł{product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status: </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item className='text-center'>
                                    <Button className='btn-block ' disabled={product.countInStock == 0} type="button">Dodaj do koszyka</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
