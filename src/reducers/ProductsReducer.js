import { GET_PRODUCTS, ADD_TO_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from '../actions';
import { toast } from 'react-toastify';
import React from 'react';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            if (Object.keys(state).length === 0) {
                return action.payload.map((p, i) => {
                    p.added = false;

                    //Because it is in cart
                    if (i === 0) {
                        p.added = true;

                        p.stock_status = "Unvailable";
                        p.quantity = 0;
                    }
                    return p;
                });
            }
            else {
                return state;
            }
        case ADD_TO_CART:
            toast.success(() => <div>{action.payload.item.name} added to cart <i className="fas fa-shopping-cart"></i></div>);
            return state.map(p => {
                if (p.id === action.payload.item.id) {
                    p.added = true;
                    if (action.payload.quantity <= p.quantity && p.quantity > 0) {
                        p.quantity -= action.payload.quantity;
                    } else {
                        p.quantity = 0;
                    }
                    if (p.quantity === 0) {
                        p.stock_status = 'Unvailable';
                    }
                }
                return p;
            });
        case INCREASE_QUANTITY:
            if (Object.keys(state).length > 0) {
                return state.map(c => {
                    if (c.id === action.payload.id && c.quantity > 0) {
                        c.quantity--;
                        if (c.quantity === 0) c.stock_status = 'Unvailable';
                    }
                    return c;
                });
            } else {
                return state;
            }

        case DECREASE_QUANTITY:
            if (Object.keys(state).length > 0) {

                return state.map(c => {
                    if (c.id === action.payload.id) {

                        c.quantity++;
                        if (action.payload.quantity === c.minimum) c.quantity += action.payload.quantity;
                        if (c.quantity > 0) c.stock_status = 'Available';
                        console.log(c);

                    }

                    return c;
                });
            } else {
                return state;
            }
        case REMOVE_FROM_CART:
            if (Object.keys(state).length > 0) {
                return state.map(c => {
                    if (c.id === action.payload.id) {
                        c.added = false;
                        c.quantity = c.quantity + action.payload.quantity;
                        c.stock_status = 'Available';
                    }
                    return c;
                });
            } else {
                return state;
            }

        default:
            return state;
    }
};