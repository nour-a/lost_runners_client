import destination from './destination';
import contacts from './contacts';
import duration from './duration';
import isRunning from './isRunning';
import locations from './locations';
import startLocation from './startLocation';

import user from './user';

import {combineReducers} from 'redux';

export default combineReducers ({
    startLocation,
    destination,
    contacts,
    duration,
    isRunning,
    locations,
    user
})
