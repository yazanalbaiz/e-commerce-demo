import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'

import ProductsReducer from './ProductsReducer';
import CartReducer from './CartReducer';
import SessionReducer from './SessionReducer';


const rootReducer = combineReducers({
	products: ProductsReducer,
	cart: CartReducer,
	session: SessionReducer,
	modal
});

export default rootReducer;
