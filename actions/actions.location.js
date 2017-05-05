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


export function fetchAndSendCurrentLocation (runId) {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            if (pos) {
                return dispatch(sendCurrentLocation({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                }, runId));
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

export function sendCurrentLocation (data, runId) {
    return function (dispatch) {
        dispatch(sendCurrentLocationRequest());
        fetch(`https://damp-meadow-34497.herokuapp.com/api/runs/${runId}/coordinates`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {return response.json()})
        .then((responseJson) => {
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