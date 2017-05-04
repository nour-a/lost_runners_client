import {LOGIN_USER_ERROR} from '../actions/types';

export default function (prevState = false, action) {
    switch (action.type) {
        case LOGIN_USER_ERROR:
            return action.payload;
        default:
            return prevState;
    }
}
