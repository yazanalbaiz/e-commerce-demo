import { GET_CART } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CART:
            return action.payload;
        default:
            return state;
    }
};

