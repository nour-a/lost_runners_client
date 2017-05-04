import React, { Component, PropTypes } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import {connect} from 'react-redux';

import {setMessage} from '../actions/actions.message';
import {startRun} from '../actions/actions.startRun';

import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        paddingHorizontal:20,
        paddingVertical: 80,
    },
    text: {
        fontWeight: 'bold',
    }
});


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(message) {
        this.setState({message});
    }
    start(){ 
        const {startLocation, destination, duration, contacts, message, user_id} = this.props;
        this.props.startRun(startLocation, destination, duration, contacts, message, user_id);
        if (this.props.isRunning){
            Actions.running(), 3000; 
        }
    }
    render() {
        return (
            <View style={styles.container}>  
                <Text style={styles.text}>Customize your message or send the default:</Text>   
                <TextInput
                style={{
                    alignSelf: 'stretch', 
                    backgroundColor: '#edebea', 
                    height: 80,
                    marginVertical: 20,
                    justifyContent: 'flex-start',
                }}
                placeholder="Hey I'm late back from my run, can you just check on me?"
                onChangeText={(message) => this.inputHandler({message})}
                />
                 <Button
                    style={{flex:1}}
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => this.start() }
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
    user_id: PropTypes.string
};


function mapStateToProps(state) {
    return {
        startLocation: state.startLocation,
        destination: state.destination,
        duration: state.duration,
        contacts: state.contacts,
        message: state.message,
        user_id: state.user.id,
        isRunning: state.isRunning
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setMessage: (message) => {
            dispatch(setMessage(message));
        },
        startRun: (startLocation,destination,duration,contacts,message,user_id) => {
            dispatch(startRun({
                startLocation: startLocation,
                destination: destination,
                duration: duration,
                contacts: contacts,
                message: message,
            }, user_id));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);