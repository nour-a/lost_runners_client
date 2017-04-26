import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Actions, Router,Scene, ActionConst } from 'react-native-router-flux';

import TabIcon from './components/TabIcon';
import Destination from './components/Destination';
import Duration from './components/Duration';


import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

export default class app extends Component {
   
  render() {
     
    return (
        <Provider store={store}>
            <Router>
                <Scene key="home" tabs={true} hideNavBar={true} tabBarStyle={styles.tabBarStyle}>
                    <Scene key="destination" title="1" icon={TabIcon} 
                    onPress={() => {Actions.destinationTab({type: ActionConst.REFRESH}); }}>
                        <Scene key="destinationTab" title="Select Route" component={Destination} />
                    </Scene>
                    <Scene key="duration" title="2" icon={TabIcon} initial
                    onPress={() => {Actions.durationTab({type: ActionConst.REFRESH}); }}>
                        <Scene key="durationTab" title="Set up duration" component={Duration} />
                    </Scene>
                </Scene>
            </Router>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});

