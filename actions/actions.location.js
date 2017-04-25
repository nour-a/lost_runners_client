import * as types from './types';

export function fetchUserLocationSuccess (pos) {
    return {
        type: types.FETCH_USER_LOCATION_SUCCESS,
        payload: pos
    };
}

export function fetchUserLocationError (pos) {
    return {
        type: types.FETCH_USER_LOCATION_ERROR,
        payload: pos
    };
}

export function fetchUserLocation () {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos) {
                return dispatch(fetchUserLocationSuccess(pos));
            }
            return dispatch(fetchUserLocationError());
        });
    };
}
