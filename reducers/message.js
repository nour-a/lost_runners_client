import * as types from '../actions/types';

export default function (prevState = '', action) {
    switch (action.type) {
        case types.SET_MESSAGE: 
            const newState = action.payload;
            return newState;
        default:
            return prevState;
    }
}
