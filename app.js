import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Actions, Router,Scene, ActionConst } from 'react-native-router-flux';

import TabIcon from './components/TabIcon.js';
import Destination from './components/Destination.js';


import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

const store = createStore(reducer);

export default class app extends Component {
   
  render() {
     
    return (
        <Provider store={store}>
            <Router>
                <Scene key="home" tabs={true} hideNavBar tabBarStyle={styles.tabBarStyle}>
                    <Scene key="tab1" title="1" icon={TabIcon} 
                    onPress={()=> {Actions.destination({type: ActionConst.REFRESH})}}>
                        <Scene key="destination" component={Destination} hideNavBar/>
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

