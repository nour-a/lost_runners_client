import React, { Component, PropTypes } from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {theme} from '../theme';

import {connect} from 'react-redux';

import {Button} from 'react-native-elements';
import {sendCurrentLocation, fetchAndSendCurrentLocation} from '../actions/actions.location';

import {deleteRun} from '../actions/actions.startRun';

import { Actions } from 'react-native-router-flux';


class Running extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: this.props.duration,
        }
    }
    componentDidMount(){
        const runId = this.props.isRunning;
        this.postUserLocation = setInterval(this.sendLoc.bind(this), 30000);
        this.timer = setInterval(this.startTimer.bind(this), 1000);
        if (this.state.timeLeft === 0) {
            clearInterval(this.postUserLocation);
            clearInterval(this.timer);
        }
    }
    sendLoc(){
       this.props.fetchAndSendCurrentLocation(this.props.isRunning) 
    }
    stopRun() {
        clearInterval(this.postUserLocation);
        clearInterval(this.timer);
        this.props.deleteRun(this.props.isRunning);
    }
    formatTime(d) {
        var h = Math.floor(d / 3600) < 10 ? '0' + Math.floor(d / 3600) : Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60) < 10 ? '0' + Math.floor(d % 3600 / 60) : Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60) < 10 ? '0' + Math.floor(d % 3600 % 60) : Math.floor(d % 3600 % 60);
        return h + ':' + m + ':' + s;
    }
    startTimer() {
        this.setState({
            timeLeft: this.state.timeLeft -1
        });
    }
    render() {
        return (
            <View style={theme.container}>  
                <Text>Oi!, Im running</Text>
                {/*<Text style={{fontSize: 100}}>{this.formatTime(this.state.timeLeft)}</Text>*/}
                <Text style={{fontSize: 100}}>{this.state.timeLeft}</Text>
                 <Button
                    style={{flex:1}}
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => this.stopRun()}
                    raised={true}
                    title='STOP'/>
            </View>
        );
    }
}

Running.propTypes = {
     duration:PropTypes.number,
     fetchAndSendCurrentLocation: PropTypes.func,
     sendCurrentLocation: PropTypes.func,
     // toogleRun: PropTypes.func,
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
        // sendCurrentLocation: (currentLocation, runId) => {
        //     dispatch(sendCurrentLocation(currentLocation, runId));
        // },
        deleteRun: (runId) => {
            dispatch(deleteRun(runId));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Running);
