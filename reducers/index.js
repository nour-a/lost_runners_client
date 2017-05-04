import destination from './destination';
import contacts from './contacts';
import duration from './duration';
import message from './message';
import isRunning from './isRunning';
import locations from './locations';
import startLocation from './startLocation';
import error from './error';

import user from './user';

import {combineReducers} from 'redux';

export default combineReducers ({
    startLocation,
    destination,
    contacts,
    duration,
    message,
    isRunning,
    locations,
    user,
    error
});
