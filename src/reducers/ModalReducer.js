import { LOAD_MODAL, CLOSE_MODAL } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case LOAD_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
};