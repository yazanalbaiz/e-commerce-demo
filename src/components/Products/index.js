import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ProductGrid from '../ProductGrid';

import './style.css';



export default class index extends Component {

    render() {
        const { products, modalNumber, addToCart, loadModal, closeModal, modalProduct, showModal } = this.props;

        return (
            <Container className="padding">
                <ProductGrid modalNumber={modalNumber} showModal={showModal} modalProduct={modalProduct} loadModal={loadModal} closeModal={closeModal} addToCart={addToCart} products={products} />
            </Container>
        )
    }
}
