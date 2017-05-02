import * as types from './types';
import {ROOT} from '../config';

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

export function startRun (data) {
    return function (dispatch) {
        dispatch(startRunRequest());
        fakeFetch(`/`, {
            method: 'post',
            body: data
        }).then(response => {
            return response.json();
        }).then((responseJson) => {
            dispatch(startRunSuccess(responseJson.id));
            return responseJson.id;
        }).catch(err => {
            dispatch(startRunError(err));
            console.log('error')
        });
        // what you return here gets returned by the dispatch function that used   
        // this action creator
        return null; 
    }
};

function fakeFetch() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve( {json: () => ( {id: 12} )} )
        }, 500)
    })
}