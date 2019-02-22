import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ProductModal from './ProductModal';






export default props => {
    let columns = [];
    props.products.forEach((p, idx) => {

        // push column
        columns.push(
            <Col lg={3} md={4} sm={6} xs={12} key={idx}>
                <Card>
                    <Card.Img variant="top" src={p.image} />
                    {p.stock_status === 'Unvailable' ? (
                        <div className="card-img-overlay">
                            <p className="Product--unavailable_text">Unavailable</p>
                        </div>
                    ) : ''}
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text className="product_card" dangerouslySetInnerHTML={{ __html: p.description }}>
                        </Card.Text>
                        <div>{p.price}<strong> SAR</strong></div>
                        <div>
                            <Button onClick={() => props.showModal('ProductModal', { product: p })} variant={p.stock_status === 'Unvailable' ? 'outline-secondary' : 'outline-primary'}>
                                {p.stock_status === 'Unvailable' ? 'Out of stock' : 'Item Details'}
                            </Button>
                            {p.stock_status === 'Available' ? (
                                <Button onClick={() => props.addToCart(p, 1)} className="Product_add-cart" variant="outline-success">
                                    <i className="fas fa-cart-plus"></i>
                                </Button>
                            ) : ''}
                        </div>

                    </Card.Body>
                </Card>
                <ProductModal addToCart={props.addToCart} product={p} status={props.modalStatus} closeModal={props.closeModal} />
            </Col>
        )

        // force wrap to next row every 4 columns
        if ((idx + 1) % 4 === 0) { columns.push(<div key={idx * 100} className="w-100"></div>) }
    })


    return (
        <Row className="padding">
            {columns}
        </Row>
    );
}