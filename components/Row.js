import React, {Component, PropTypes} from 'react';
import { CheckBox } from 'react-native-elements';

export default class Row extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            checked: false
        }; 
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(num) {
        this.props.addNumber(num);
        this.setState({
            checked: !this.state.checked
        });
    }
    render() { 
        console.log(this.props)
        return (                                  
            <CheckBox
            onPress={() => this.handlePress(this.props.number)}
            iconRight={true}
            title={this.props.label + ' ' +this.props.number}
            iconType='material'
            checkedIcon='check'
            uncheckedIcon='clear'
            uncheckedColor='#fff'
            checkedColor='blue'
            checked={this.state.checked}
            containerStyle={{
                backgroundColor:'#fff', 
                borderColor:'#fff',
                paddingHorizontal: 0,
                paddingVertical: 0,
                }}
            />                                                
        );
    }
}

Row.propTypes = {
    thumbnailPath: PropTypes.string,
    givenName: PropTypes.string,
    familyName: PropTypes.string,
    phoneNumbers: PropTypes.array,
    addNumber: PropTypes.func,
    handleCheck:PropTypes.func,
    number:PropTypes.string
};
