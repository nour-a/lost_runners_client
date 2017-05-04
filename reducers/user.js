import {LOGIN_USER_SUCCESS} from '../actions/types';

export default function (prevState = false, action) {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {id: action.payload.userId};
        default:
            return prevState;
    }
}
