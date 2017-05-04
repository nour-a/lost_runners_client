import * as types from './types';
// import {ROOT} from '../config';

export function startRunRequest () { 
     return {
        type: types.START_RUN,
    };
}

export function startRunSuccess (res) { 
     return {
        type: types.START_RUN_SUCCESS,
        payload: res
    };
}

export function startRunError (error) { 
     return {
        type: types.START_RUN_ERROR,
        payload: error
    };
}

export function startRun (data, userID) {
    return function (dispatch) {
        dispatch(startRunRequest());
        fetch(`https://lost-runner.herokuapp.com/api/users/1/run`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => { 
            
            return response.json()
        })
        .then((responseJson) => {
            return responseJson.id;
        })
        .then((id) => dispatch(startRunSuccess(id)) )
        .catch(err => {
            dispatch(startRunError(err));
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