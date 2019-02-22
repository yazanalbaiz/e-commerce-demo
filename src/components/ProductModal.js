import { Modal, Button, Form } from 'react-bootstrap';
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
                    <p dangerouslySetInnerHTML={{ __html: product.description }} />
                </Modal.Body>
                <Modal.Footer>
                    <Form onSubmit={this.handleAddToCart} inline>
                        <Form.Group>

                            <Form.Control disabled={product.quantity > 0 ? false : true} name="quantity" min="1" max={product.quantity} type="number" />
                            <Button disabled={product.quantity > 0 ? false : true} type="submit" variant={product.quantity > 0 ? "outline-success" : "outline-secondary"} >
                                Add to cart
                            </Button>
                        </Form.Group>
                    </Form>

                </Modal.Footer>
            </Modal>
        )
    }
});
