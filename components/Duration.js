import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import {theme} from '../theme';
import {Button} from 'react-native-elements';
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
           <View style={theme.container}>
               <Text style={{fontSize: 100}}>{this.formatTime(this.props.duration)}</Text>
                <View style={{flexDirection:'row'}}>
                    <Button
                    backgroundColor='rgb(250,0,0)'
                    buttonStyle={theme.btnCirlce}
                    onPress={() => this.props.updateDuration(60)}
                    raised={true}
                    title='+'/>
                    <Button
                    backgroundColor='rgb(250,0,0)'
                    buttonStyle={[theme.btnCirlce, {marginRight:20}]}
                    onPress={() => this.props.updateDuration(-60)}
                    raised={true}
                    title='-'/>
                    <Button
                    backgroundColor='rgb(250,0,0)'
                    buttonStyle={[theme.btnCirlce, {marginLeft:25}]}
                    onPress={() => this.props.updateDuration(1)}
                    raised={true}
                    title='+'/>
                    <Button
                    backgroundColor='rgb(250,0,0)'
                    buttonStyle={theme.btnCirlce}
                    onPress={() => this.props.updateDuration(-1)}
                    raised={true}
                    title='-'/>
                </View> 
                <Button
                    iconRight={true}
                    backgroundColor='rgb(250,0,0)'
                    borderRadius={50}
                    onPress={() => Actions.destination()}
                    raised={true}
                    icon={{name: 'chevron-right'}}
                    title='Next'/>
           </View> 
        );
    }
}


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
