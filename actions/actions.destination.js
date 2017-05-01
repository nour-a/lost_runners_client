import * as types from './types';

export function setUserDestination (pos) {
    return {
        type: types.SET_USER_DESTINATION,
        payload: pos
    };
}

export function fetchDestinationCoords (id) {
    return function (dispatch) {
        fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDGIXl-W13BksPlK6lXUIM1UvVb__3VPec&placeid=${id}`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            const {lat:latitude, lng:longitude} = res.result.geometry.location;
            dispatch(setUserDestination({latitude, longitude}));
        })
        .catch(err => {
            return console.log(err);
        });
    };
}
