import * as types from './types';

export function setUserDestination (pos) {
    return {
        type: types.SET_USER_DESTINATION,
        payload: pos
    };
}
