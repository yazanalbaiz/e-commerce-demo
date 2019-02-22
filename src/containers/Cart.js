import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as Actions from '../actions';
import ShopNav from '../components/ShopNav';
import CartComponent from '../components/CartComponent';

const mapStateToProps = state =>
    ({
        products: state.products,
        cart: state.cart,
        session: state.session
    })
    ;

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(Actions.getProducts()),
    getCart: session => dispatch(Actions.getCart(session)),
    increaseQuantity: (item, products) => dispatch(Actions.increaseQuantity(item, products)),
    decreaseQuantity: item => dispatch(Actions.decreaseQuantity(item)),
    removeFromCart: item => dispatch(Actions.removeFromCart(item)),
    startSession: () => dispatch(Actions.startSession())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class Cart extends Component {


    componentDidMount = () => {
        this.props.getProducts();
        this.props.getCart(this.props.session);
        this.props.startSession();
    };
    render() {

        const { cart, products, increaseQuantity, decreaseQuantity, removeFromCart } = this.props;
        const cartCondition = Object.keys(cart)[0] === "0";
        return (cartCondition) ? (
            <div>
                <ShopNav page="cart" />
                <CartComponent products={products} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} cart={cart} />
            </div>
        ) : <div>
                <ShopNav page="cart" />
                <CartComponent removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} cart={[]} />
            </div>
    }
});
