import * as types from '../actions/types';

export default function (prevState = {}, action) {
    switch (action.type) {
        case types.START_RUN: 
            return prevState;
        default:
            return prevState;
    }
}
