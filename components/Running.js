import React, { Component, PropTypes } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

import {connect} from 'react-redux';

import {Button} from 'react-native-elements';
import {sendCurrentLocation, fetchAndSendCurrentLocation} from '../actions/actions.location';



class Running extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
        }
    }
    componentDidMount(){
        console.log(this.props.duration, this.props.isRunning);
        
        if (this.props.isRunning){
            this.startTimer(this.props.duration);
            this.postUserLocation();
        }  else {
            clearInterval(this.props.fetchAndSendCurrentLocation);
            clearInterval(this.startTimer);
        }    
    }
    stopRun() {
        clearInterval(this.props.fetchAndSendCurrentLocation);
        clearInterval(this.startTimer);
    }
    formatTime(mins) {
        var hours = Math.floor(mins / 60) < 10 ? '0' + Math.floor(mins / 60) : Math.floor(mins / 60);
        var minutes = mins % 60 < 10 ? '0' + mins % 60 : mins % 60;
        return hours + ':' + minutes;
    }
    postUserLocation() { 
        setInterval(this.props.fetchAndSendCurrentLocation, 30000); 
    }
    startTimer(count) {
        this.setState({
            timeLeft: count
        })
        setInterval(() => {
            count -= 1;
            this.setState({
                timeLeft: count
            })
        }, 60000); 
    }
    render() {
        return (
            <View style={theme.container}>  
                <Text>Oi!, Im running</Text>
                <Text style={{fontSize: 100}}>time left {this.formatTime(this.state.timeLeft)}</Text>
                 <Button
                    style={{flex:1}}
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => this.stopRun() }
                    raised={true}
                    title='STOP'/>
            </View>
        );
    }
}

Running.propTypes = {
     duration:PropTypes.number
};
function mapStateToProps(state) {
    return {
        duration: state.duration,
        isRunning: state.isRunning,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchAndSendCurrentLocation: (runId) => {
            dispatch(fetchAndSendCurrentLocation(runId));
        },
        sendCurrentLocation: (currentLocation) => {
            dispatch(sendCurrentLocation(currentLocation));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Running);
