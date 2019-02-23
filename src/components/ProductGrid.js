import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

export default props => {
    let rows = [];
    props.products.forEach((np, idx) => {
        if (idx % 3 === 0) {
            let cols = [];
            props.products.forEach((p, i) => {
                if (i < idx + 3 && i >= idx) {
                    cols.push(
                        <Col lg={3} md={4} sm={6} xs={12} key={i}>
                            <Card>
                                <Card.Img variant="top" src={p.image} />
                                {p.stock_status === 'Unvailable' ? (
                                    <div className="card-img-overlay">
                                        <p className="Product--unavailable_text">Unavailable</p>
                                    </div>
                                ) : ''}
                                <Card.Body>
                                    <Card.Title className="Product_name">
                                        {p.name}  {p.added ? <Badge className="ml-auto" variant="info"><i className="fas fa-cart-arrow-down"></i></Badge> : ''}
                                    </Card.Title>
                                    {isNaN(Date.parse(new Date(p.updated_at.date))) ? '' :
                                        <div>
                                            Updated: {
                                                parseInt((((new Date(Date.now())) - (new Date(p.updated_at.date))) / (1000 * 60 * 60 * 24)).toFixed(0))
                                            } Days ago
                                        </div>
                                    }

                                    <div>
                                        {p.old_price > 0 ? <span className="strikethrough mr-2">{p.old_price} SAR</span> : ''}
                                        <p className="Product_price">
                                            {p.price}<strong> SAR</strong>
                                        </p>
                                    </div>
                                    <div>
                                        <Button onClick={() => props.showModal(`ProductModal`, { product: p })} variant={p.stock_status === 'Unvailable' ? 'outline-secondary' : 'outline-primary'}>
                                            {p.stock_status === 'Unvailable' || p.quantity < 1 ? 'Out of stock' : 'Item Details'}
                                        </Button>
                                        {p.stock_status === 'Available' ? (
                                            <Button onClick={() => {
                                                if (p.added) {
                                                    props.addToCart(p, 1);
                                                } else {
                                                    props.addToCart(p, p.minimum);

                                                }
                                            }} className="Product_add-cart" variant="outline-success">
                                                <i className="fas fa-cart-plus"></i>
                                            </Button>
                                        ) : ''}
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    );

                }
            })
            rows.push(<Row className="justify-content-center mb-4" key={idx}>{cols}</Row>);
            cols = [];
        }
    })


    return (
        <div className="padding">
            {rows}
        </div>
    );
}