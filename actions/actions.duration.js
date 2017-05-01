import * as types from './types';

export function updateDuration (time) {
    return {
        type: types.UPDATE_DURATION,
        payload: time
    };
}
