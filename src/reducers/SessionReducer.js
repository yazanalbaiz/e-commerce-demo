import { START_SESSION } from '../actions';

export default (state = false, action) => {
    switch (action.type) {
        case START_SESSION:
            return true;
        default:
            return state;
    }
};