import React, { Component } from 'react';
import {theme} from './theme';
import { Actions, Router,Scene, ActionConst, initial  } from 'react-native-router-flux';

import { Actions, Router,Scene, ActionConst, initial  } from 'react-native-router-flux';

import Wellcome from './components/Wellcome';
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
                <Scene key="root" hideNavBar={true}>
                    <Scene initial key="wellcome"  hideNavBar={true} component={Wellcome} direction="horitzontal"/>
                    <Scene key="home" tabs={true} hideNavBar={true} tabBarStyle={theme.tabBarStyle} direction="horitzontal">
                        <Scene initial key="destination" title="" icon={TabIcon}  navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}}
                        onPress={() => {Actions.destinationTab({type: ActionConst.REFRESH}); }} barButtonIconStyle={{tintColor: 'rgb(128,127,227)'}}>
                            <Scene key="destinationTab" title="Select Route" component={Destination} />
                        </Scene>
                        <Scene key="duration" title="" icon={TabIcon} navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}}
                        onPress={() => {Actions.durationTab({type: ActionConst.REFRESH}); }} barButtonIconStyle={{tintColor: 'rgb(128,127,227)'}}>
                            <Scene key="durationTab" title="Set up duration" component={Duration} />
                        </Scene>
                        <Scene key="contacts" title="" icon={TabIcon} navigationBarStyle={theme.bgDarkBlue} titleStyle={{color:'white'}} 
                        onPress={() => {Actions.contactsTab({type: ActionConst.REFRESH}); }} barButtonIconStyle={{tintColor: 'rgb(128,127,227)'}}>
                            <Scene key="contactsTab" title="Select contacts" component={Contacts} />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        </Provider>
    );
  }
}

