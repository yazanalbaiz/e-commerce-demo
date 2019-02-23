import React, { Component } from 'react';
import { ListGroup, Container, Image, Button, Row, Col, ButtonGroup } from 'react-bootstrap';

import './style.css';

export default class CartComponent extends Component {

    calculateSum = () => {
        const { cart, products } = this.props;
        const prices = cart.map(c => (c.price * c.quantity));

        return prices.reduce((t, p) => t + p);
    }

    render() {
        const Item = ListGroup.Item;
        const { cart, products } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            <Item className="Cart_header">
                                <Row>
                                    <Col>
                                        <p>Preview</p>
                                    </Col>
                                    <Col>
                                        <p>Name</p>
                                    </Col>
                                    <Col><p>Price</p></Col>
                                    <Col>
                                        <p>Quantity</p>
                                    </Col>
                                    <Col>
                                        <p>Delete</p>
                                    </Col>
                                </Row>
                            </Item>
                            {cart.length > 0 ? cart.map((c, i) => (
                                <Item key={i}>
                                    <Row>
                                        <Col>
                                            <Image src={c.image} width={60} height={60} />
                                        </Col>
                                        <Col>
                                            <p>{c.name}</p>
                                        </Col>
                                        <Col><p className="Product_price">{c.price * c.quantity} SAR</p></Col>
                                        <Col>
                                            <ButtonGroup>
                                                <Button onClick={() => this.props.decreaseQuantity(c)} variant="outline-secondary">-</Button>
                                                <input disabled className="Cart_quantity" type="text" value={c.quantity} />
                                                <Button onClick={() => this.props.increaseQuantity(c, products)} variant="outline-secondary">+</Button>
                                            </ButtonGroup>
                                        </Col>
                                        <Col>
                                            <Button onClick={() => this.props.removeFromCart(c)} variant='outline-danger' style={{ float: 'right' }}>X</Button>
                                        </Col>
                                    </Row>
                                </Item>
                            )) : ''}
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="Product_price">
                        <strong>Total: </strong>{cart.length > 0 ? `${this.calculateSum()} SAR` : <strong> Cart Empty</strong>}
                    </Col>
                </Row>
            </Container >
        )
    }
}
