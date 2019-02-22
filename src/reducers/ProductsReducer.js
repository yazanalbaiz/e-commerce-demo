import { GET_PRODUCTS, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log(state)
            if (Object.keys(state).length === 0) {
                return action.payload;
            }
            else {
                return state;
            }
        case ADD_TO_CART:
            return state.map(p => {
                if (p.id === action.payload.item.id) {
                    p.quantity -= action.payload.quantity;
                    if (p.quantity === 0) {
                        p.stock_status = 'Unvailable';
                    }
                }
                return p;
            });
        case INCREASE_QUANTITY:
            if (Object.keys(state).length > 0) {
                return state.map(c => {
                    if (c && c.id === action.payload.id && c.quantity !== 0) c.quantity--;
                    if (c.quantity === 0) c.stock_status = 'Unvailable';
                    return c;
                });
            } else {
                return state;
            }

        case DECREASE_QUANTITY:
            if (Object.keys(state).length > 0) {
                return state.map(c => {
                    if (c.id === action.payload.id) c.quantity++;
                    if (c.quantity > 0) c.stock_status = 'Available';
                    return c;
                });
            } else {
                return state;
            }
        case REMOVE_FROM_CART:
            if (Object.keys(state).length > 0) {
                return state.map(c => {
                    if (c.id === action.payload.id) c.quantity = c.quantity + action.payload.quantity;
                    return c;
                });
            } else {
                return state;
            }

        default:
            return state;
    }
};