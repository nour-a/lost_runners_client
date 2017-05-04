import * as types from '../actions/types';

export default function (prevState = false, action) {
    switch (action.type) {
        case types.START_RUN_REQUEST: 
            return prevState;
        case types.START_RUN_SUCCESS: 
            return action.payload;
        default:
            return prevState;
    }
}
