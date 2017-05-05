import * as types from '../actions/types';

export default function (prevState = false, action) {
    switch (action.type) {
        case types.START_RUN_SUCCESS: 
            return action.payload;
        case types.DELETE_RUN_SUCCESS: 
            return action.payload;
        default:
            return prevState;
    }
}
