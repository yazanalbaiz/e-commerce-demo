import React, { Component } from 'react';
import { connect } from 'react-redux';
import { show } from 'redux-modal';

import Products from '../components/Products';
import ShopNav from '../components/ShopNav';

import * as Actions from '../actions';

// (async () => {
//     await Actions.getProducts();
//     await Actions.getCart();
// })();

const mapStateToProps = state =>
    ({
        products: state.products,
        cart: state.cart,
        modalStatus: state.modalStatus,
        session: state.session
    })
    ;

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(Actions.getProducts()),
    getCart: session => dispatch(Actions.getCart(session)),
    addToCart: (item, quantity) => dispatch(Actions.addToCart(item, quantity)),
    loadModal: item => dispatch(Actions.loadModal(item)),
    closeModal: item => dispatch(Actions.closeModal(item)),
    showModal: (name, props) => dispatch(show(name, props)),
    startSession: () => (Actions.startSession())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class Home extends Component {
    componentDidMount = () => {
        this.props.getProducts();
        this.props.getCart(this.props.session);
        this.props.startSession();
    };

    render() {
        const { products, addToCart, loadModal, closeModal, modalStatus, showModal } = this.props;
        const productsCondition = products.length > 0;
        return (productsCondition) ? (
            <div>
                <ShopNav page="home" />
                <Products showModal={showModal} modalStatus={modalStatus} loadModal={loadModal} closeModal={closeModal} addToCart={addToCart} products={products} />
            </div>
        ) : <div>
                <ShopNav page="home" />
            </div>;
    }
});
