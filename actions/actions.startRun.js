import * as types from './types';

export function startRun (data) {
    return {
        type: types.START_RUN,
        payload: data
    };
}