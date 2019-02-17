import Zid from '../api/Zid';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CART = 'GET_CART';


export const getProducts = () => Zid.get()
    .then(({ data }) => {
        /* Using ES2019/ES10 flatMap function
        * Babel will transpile and polyfill
        */
        const products = [
            data.layout.body.hot_products,
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

export const getCart = () => Zid.get()
    .then(({ data }) => console.log(data));

export const addToCart = product => {
    console.log(product);
};