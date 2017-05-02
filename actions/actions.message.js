import * as types from './types';

export function setMessage (message) {
    return {
        type: types.SET_MESSAGE,
        payload: message
    };
}