import React, { Component, PropTypes } from 'react';
import {View, TextInput, Text} from 'react-native';
import {theme} from '../theme';

import {connect} from 'react-redux';

import {setMessage} from '../actions/actions.message';
import {startRun} from '../actions/actions.startRun';

import {Button} from 'react-native-elements';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }
    render() {
        return (
            <View style={theme.container}>
                <Text style={{fontSize: 50}}>duration: {this.props.duration}</Text>
                <Text style={{fontSize: 50}}>latitude: {this.props.destination.latitude}</Text>
                <Text style={{fontSize: 50}}>longitude: {this.props.destination.longitude}</Text>
                
                <TextInput
                style={{flex:1, alignSelf: 'stretch'}}
                placeholder="Type here to customize your message!"
                onChangeText={(message) => this.setState({message})}
                />
                 <Button
                    style={{flex:1}}
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => this.props.setMessage(this.state.message)}
                    raised={true}
                    icon={{name: 'chevron-right'}}
                    title='Run baby, run!'/>
            </View>
        );
    }
}


Message.propTypes = {
    message: PropTypes.string,
    startRun: PropTypes.func,
    setMessage: PropTypes.func,
    startLocation: PropTypes.object,
    destination: PropTypes.object,
    duration: PropTypes.number,
    contacts: PropTypes.array,
};


function mapStateToProps(state) {
    return {
        startLocation: state.startLocation,
        destination: state.destination,
        duration: state.duration,
        contacts: state.contacts,
        message: state.message,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setMessage: (message) => {
            console.log('contacts', this.props.contacts);
            dispatch(setMessage(message));
            dispatch(startRun({
                startLocation: this.props.startLocation,
                destination: this.props.destination,
                duration: this.props.duration,
                contacts: this.props.contacts,
                message: this.props.message
            }));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);
