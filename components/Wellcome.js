import React, {PropTypes} from 'react';
import {View, Image} from 'react-native';
import {theme} from '../theme';

import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';

import {Button} from 'react-native-elements';
import {loginUser} from '../actions/actions.user';
import lock from '../utils/auth/lock';

const Welcome = (props) => (
    <View {...props}  style={[theme.container, {paddingVertical: 0}]}>
        <View style={[theme.container, theme.bgDarkBlue, {paddingVertical: 0}]}>
            <Image source={require('../img/logo.png')} />
        </View>
        <View style={[theme.container, {paddingVertical: 0}]}>
            {/* Place AuthO component here */}
            <Button
                iconRight={true}
                backgroundColor='rgb(250,0,0)'
                borderRadius={50}
                onPress={() => props.loginUser(lock, DeviceInfo.getDeviceId())}
                raised={true}
                icon={{name: 'chevron-right'}}
                title='Log in'
            />
        </View>              
    </View> 
);

Welcome.propTypes = {
    loginUser: PropTypes.func
};

function mapDispatchToProps (dispatch) {
    return {
        loginUser: (lock, deviceId) => {
            dispatch(loginUser(lock, deviceId));
        }
    };
}

export default connect(null, mapDispatchToProps)(Welcome);
