import {LOGIN_USER_SUCCESS, LOGIN_USER_ERROR} from './types';

export function loginUserSuccess (user) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user
    };
}

export function loginUserError (err) {
    return {
        type: LOGIN_USER_ERROR,
        payload: err
    };
}

export function loginUser (lock, deviceId) {
    return function (dispatch) {
        lock.show({
            closable: true,
            authParams: {
                scope: 'openid email offline_access',
                device: deviceId
            },
        }, (err, profile) => {
            if (err) {
                return dispatch(loginUserError(err));
            }
            // Authentication worked!
            dispatch(loginUserSuccess(profile));
        });
    };
}    
