import Zid from '../api/Zid';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const START_SESSION = 'START_SESSION';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_MODAL = 'LOAD_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const loadModal = item => {
    return ({
        type: LOAD_MODAL,
        payload: { ...item, status: true }
    })
};

export const closeModal = item => ({
    type: CLOSE_MODAL,
    payload: { ...item, status: false }
});

export const addToCart = (item, quantity) => ({
    type: ADD_TO_CART,
    payload: { item, quantity }
});

export const startSession = () => ({
    type: START_SESSION,
});

export const increaseQuantity = (item, products) => {
    console.log(products)
    return ({
        type: INCREASE_QUANTITY,
        payload: { ...item, products }
    })
};

export const decreaseQuantity = item => ({
    type: DECREASE_QUANTITY,
    payload: item
});

export const removeFromCart = item => ({
    type: REMOVE_FROM_CART,
    payload: item
})

export const getProducts = () => Zid.get()
    .then(({ data }) => {
        /* Using ES2019/ES10 flatMap function
        * Babel will transpile and polyfill
        */
        const products = [
            data.layout.body.recent_products
        ].flatMap((p, i) => {
            if (i === 0) {
                p = p.map(np => {
                    np.type = 'hot';
                    return np;
                });
            } else {
                p = p.map(np => {
                    np.type = 'recent';
                    return np;
                });
            }
            return p;
        });

        return {
            type: GET_PRODUCTS,
            payload: products
        };
    });

export const getCart = session => Zid.get()
    .then(({ data }) => {
        return {
            type: GET_CART,
            payload: { cart: data.cart.items, session }
        };
    });
