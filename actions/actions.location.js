import * as types from './types';

export function fetchStartLocationSuccess (pos) {
    return {
        type: types.FETCH_START_LOCATION_SUCCESS,
        payload: pos
    };
}

export function fetchStartLocationError (pos) {
    return {
        type: types.FETCH_START_LOCATION_ERROR,
        payload: pos
    };
}

export function fetchStartLocation () {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos) {
                return dispatch(fetchStartLocationSuccess(pos));
            }
            return dispatch(fetchStartLocationError());
        });
    };
}

// fetch current position

export function fetchCurrentLocationError (pos) {
    return {
        type: types.FETCH_CURRENT_LOCATION_ERROR,
        payload: pos
    };
}


export function fetchAndSendCurrentLocation () {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos) {
                return dispatch(sendCurrentLocation({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                }));
            }
            return dispatch(fetchCurrentLocationError());
        });
    };
}


export function sendCurrentLocationRequest () { 
     return {
        type: types.SEND_CURRENT_LOCATION_REQUEST,
    };
}

export function sendCurrentLocationSuccess (res) { 
     return {
        type: types.SEND_CURRENT_LOCATION_SUCCESS,
        payload: res
    };
}

export function sendCurrentLocationError (error) { 
     return {
        type: types.SEND_CURRENT_LOCATION_ERROR,
        payload: error
    };
}

export function sendCurrentLocation (data) {
    console.log('oi***', data)
    return function (dispatch) {
        dispatch(sendCurrentLocationRequest());
        fakeFetch('/', {
            method: 'post',
            body: data
        }).then(response => {
            return response.json();
        }).then((responseJson) => {
            dispatch(sendCurrentLocationSuccess(responseJson));
            return responseJson;
        }).catch(err => {
            dispatch(sendCurrentLocationError(err));
            console.log('error');
        });
        return null; 
    };
}


function fakeFetch() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({json: () => ({id: 12})});
        }, 500);
    });
}