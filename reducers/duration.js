import * as types from '../actions/types';

export default function (prevState = 0, action) {
    switch (action.type) {
        case types.UPDATE_DURATION: 
            return prevState + action.payload < 0 ? 0 : prevState + action.payload;
        default:
            return prevState;
    }
}
