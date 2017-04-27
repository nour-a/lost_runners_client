import * as types from '../actions/types';
export default function (prevState = [], action) {
    switch (action.type) {
        case types.UPDATE_CONTACTS:
            if (prevState.includes(action.payload)) {
            return prevState.filter((elem) => {
                return elem !== action.payload;
            });
            } else {
                var newState = prevState.slice();
                newState.push(action.payload);
                 console.log(newState);
                return newState;
             }                  
        default:
            return prevState;
    }
}
