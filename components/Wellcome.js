import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {theme} from '../theme';

import {Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class Wellcome extends Component {
    render() {
        return (
           <View {...this.props}  style={[theme.container, {paddingVertical: 0}]}>
               <View style={[theme.container, theme.bgDarkBlue, {paddingVertical: 0}]}>
                   <Image source={require('../img/logo.png')} />
               </View>
               <View style={[theme.container, {paddingVertical: 0}]}>
                    {/* Place AuthO component here */}
                    <Button
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => Actions.home()}
                    raised={true}
                    icon={{name: 'chevron-right'}}
                    title='Log in'/>
               </View>              
           </View> 
        );
    }
}
