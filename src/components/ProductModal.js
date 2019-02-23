import { Modal, Button, Form, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { connectModal } from 'redux-modal';

export default connectModal({ name: 'ProductModal' })(class ProductModal extends Component {

    handleAddToCart = e => {
        e.preventDefault();
        const { product } = this.props;

        const value = e.target.quantity.value > 0 ? e.target.quantity.value : 1;

        this.props.addToCart(product, value);
    };

    render() {
        const { show, handleHide, product } = this.props;
        return (
            <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Image src={product.image} alt={`${product.name} image`}></Image>
                    <p dangerouslySetInnerHTML={{ __html: product.description }} />
                </Modal.Body>
                <Modal.Footer>
                    <div className="mr-auto">
                        {product.old_price > 0 ? <p className="strikethrough">{product.old_price} SAR</p> : ''}
                        {product.price} SAR
                    </div>
                    <Form onSubmit={this.handleAddToCart} inline>
                        <Form.Group>
                            <Form.Control disabled={product.stock_status === "Unvailable" ? true : false} name="quantity" min="1" max={product.quantity} type="number" />
                            <Button disabled={product.stock_status === "Unvailable" ? true : false} type="submit" variant={product.quantity > 0 ? "outline-success" : "outline-secondary"} >
                                Add to cart
                            </Button>
                        </Form.Group>
                    </Form>

                </Modal.Footer>
            </Modal>
        )
    }
});
