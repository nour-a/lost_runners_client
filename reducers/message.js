import * as types from '../actions/types';

export default function (prevState = '', action) {
    switch (action.type) {
        case types.SET_MESSAGE: 
            return prevState + action.payload;
        default:
            return prevState;
    }
}
