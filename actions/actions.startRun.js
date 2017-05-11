import * as types from './types';
// import {ROOT} from '../config';


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

export function startRun (data) {
    return function (dispatch) {
        fetch(`https://damp-meadow-34497.herokuapp.com/api/users/1/run`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => { return response.json() })
        .then((responseJson) => { return responseJson.id })
        .then((id) => dispatch(startRunSuccess(id)) ) 
        .catch(err => {
            dispatch(startRunError(err));
            console.log('error');
        });
        return null; 
    };
}

// function fakeFetch() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve({json: () => ({id: 12})});
//         }, 500);
//     });
// }


export function deleteRunSuccess (res) { 
     return {
        type: types.DELETE_RUN_SUCCESS,
        payload: res
    };
}
export function deleteRunError (err) { 
     return {
        type: types.DELETE_RUN_ERROR,
        payload: err
    };
}

export function deleteRun (runId) {
    return function (dispatch) {
        fetch(`https://damp-meadow-34497.herokuapp.com/api/runs/${runId}`, {
            method: 'DELETE',
        })
        .then(response => { return response.json() })
        .then((responseJson) => { return responseJson })
        .then((res) => dispatch(deleteRunSuccess(res)) )
        .catch(err => {
            dispatch(deleteRunError(err));
            console.log('something went wrong, could not delete the run');
        });
        return null; 
    };
}