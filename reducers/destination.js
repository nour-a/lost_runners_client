import { SET_USER_DESTINATION } from '../actions/types';


export default function (prevState = {}, action) {
    switch (action.type) {
        case SET_USER_DESTINATION: 
            {
                const { latitude, longitude } = action.payload;
                return Object.assign({}, prevState, {latitude, longitude});
            }
        default:
            return prevState;
    }
}
