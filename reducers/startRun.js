import * as types from '../actions/types';


export default function (prevState = {}, action) {
    switch (action.type) {
        case START_RUN: 
            {
                return prevState;
            }
        default:
            return prevState;
    }
}
