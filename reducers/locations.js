import * as types from '../actions/types';


export default function (prevState = {}, action) {
    switch (action.type) {
        case types.FETCH_CURRENT_LOCATION_SUCCESS: 
            return prevState;
        case types.SEND_CURRENT_LOCATION: 
            return prevState;
        default:
            return prevState;
    }
}