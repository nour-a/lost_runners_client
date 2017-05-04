import {expect} from 'chai';
import {fetchUserLocation} from  '../actions/actions.location';

describe('Redux actions', () => {
    describe('fetchUserLocation', () => {     
        test('should be a function', () => {
            expect(fetchUserLocation).to.be.a('function');
        });
    });
});
