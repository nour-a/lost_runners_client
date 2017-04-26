import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

import {connect} from 'react-redux';
import {updateDuration} from '../actions/actions.duration';

class Duration extends Component {
    formatTime(mins) {
        var hours = Math.floor(mins / 60) < 10 ? '0' + Math.floor(mins / 60) : Math.floor(mins / 60);
        var minutes = mins % 60 < 10 ? '0' + mins % 60 : mins % 60;
        return hours + ':' + minutes;
    }
    render() {
        return (
           <View style={styles.container}>
               <Text>{this.formatTime(this.props.duration)}</Text>
               <Button
                    style={{fontSize: 20, color: 'blue'}}
                    onPress={() => this.props.updateDuration(60)}>
                    +
                </Button>
                <Button
                    style={{fontSize: 20, color: 'blue'}}
                    onPress={() => this.props.updateDuration(-60)}>
                    -
                </Button>
                
                <Button
                    style={{fontSize: 20, color: 'red'}}
                    onPress={() => this.props.updateDuration(1)}>
                    +
                </Button>
                <Button
                    style={{fontSize: 20, color: 'red'}}
                    onPress={() => this.props.updateDuration(-1)}>
                    -
                </Button>
                <Button
                    style={{fontSize: 20, color: 'red'}}
                    onPress={() => Actions.destination()}>
                    Next
                </Button>
           </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

Duration.propTypes = {
    updateDuration: PropTypes.func,
    duration:PropTypes.number
};

function mapStateToProps(state) {
    return {
        duration: state.duration
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateDuration: (time) => {
            dispatch(updateDuration(time));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Duration);
