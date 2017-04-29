import * as types from './types';

export function updateContacts (contactList) {
    return {
        type: types.UPDATE_CONTACTS,
        payload: contactList
    };
}
