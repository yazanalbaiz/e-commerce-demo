import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-modal'

import ProductsReducer from './ProductsReducer';
import CartReducer from './CartReducer';
import ModalReducer from './ModalReducer';
import SessionReducer from './SessionReducer';


const rootReducer = combineReducers({
	products: ProductsReducer,
	cart: CartReducer,
	modalStatus: ModalReducer,
	session: SessionReducer,
	modal
});

export default rootReducer;
