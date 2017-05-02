import * as types from '../actions/types';

export default function (prevState = false, action) {
    switch (action.type) {
        case types.START_RUN: 
            return prevState;
        case types.START_RUN_SUCCESS: 
            return Object.assign({}, prevState, { isRunning: action.payload });
        default:
            return prevState;
    }
}
