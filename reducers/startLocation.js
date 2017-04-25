import { FETCH_USER_LOCATION_SUCCESS } from '../actions/types';


export default function (prevState = {}, action) {
    switch (action.type) {
        case FETCH_USER_LOCATION_SUCCESS:
            return Object.assign({}, prevState, action.payload);
        default:
            return prevState;
    }
}
