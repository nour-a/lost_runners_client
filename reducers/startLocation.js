import { FETCH_USER_LOCATION_SUCCESS } from '../actions/types';


export default function (prevState = {}, action) {
    switch (action.type) {
        case FETCH_USER_LOCATION_SUCCESS: 
            {
                const { latitude, longitude } = action.payload.coords;
                return Object.assign({}, prevState, {latitude, longitude});
            }
        default:
            return prevState;
    }
}
