import React, { Component } from 'react';
import {theme} from './theme';


import { Actions, Router,Scene, ActionConst, initial  } from 'react-native-router-flux';

import TabIcon from './components/TabIcon';
import Destination from './components/Destination';
import Duration from './components/Duration';
import Contacts from './components/Contacts';


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
                <Scene key="home" tabs={true} hideNavBar={true} tabBarStyle={theme.tabBarStyle}>
                    <Scene key="destination" title="" icon={TabIcon}  navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}}
                    onPress={() => {Actions.destinationTab({type: ActionConst.REFRESH}); }}>
                        <Scene key="destinationTab" title="Select Route" component={Destination} />
                    </Scene>
                    <Scene key="duration" title="" icon={TabIcon} navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}} initial
                    onPress={() => {Actions.durationTab({type: ActionConst.REFRESH}); }}>
                        <Scene key="durationTab" title="Set up duration" component={Duration} />
                    </Scene>
                    <Scene key="contacts" title="" icon={TabIcon} navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}}
                    onPress={() => {Actions.contactsTab({type: ActionConst.REFRESH}); }}>
                        <Scene key="contactsTab" title="Select contacts" component={Contacts} />
                    </Scene>
                </Scene>
            </Router>
        </Provider>
    );
  }
}

