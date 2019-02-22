import { GET_CART, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from '../actions';
export default (state = {}, action) => {
    switch (action.type) {
        case GET_CART:
            console.log(state)
            if (!action.payload.session) {
                return action.payload.cart;
            }
            else
                return state;
        case ADD_TO_CART:
            if (state.find(c => c.id === action.payload.item.id)) {
                return state.map(c => {
                    if (c.id === action.payload.id) c.quantity += action.payload.quantity;
                    return c;
                })
            }
            else {
                return [...state, { ...action.payload.item, quantity: action.payload.quantity }];
            }
        case INCREASE_QUANTITY:
            return state.map(c => {
                if (c.id === action.payload.id) c.quantity++;
                return c;
            });

        case DECREASE_QUANTITY:
            if (action.payload.quantity > 1) {
                return state.map(c => {
                    if (c.id === action.payload.id && c.quantity > 0) c.quantity--;
                    return c;
                });
            } else {
                return state.filter(c => c.id !== action.payload.id);
            }

        case REMOVE_FROM_CART:
            return state.filter(c => c.id !== action.payload.id);
        default:
            return state;
    }
};

