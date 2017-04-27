import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

export default class ListSearch extends Component {
    constructor (props) {
        super(props);
        this.state = {text: props.initialInputValue, options: []};
        this.onLocationInput = this.onLocationInput.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    componentWillReceiveProps (newProps) {
        if (newProps.initialInputValue !== this.props.initialInputValue) {
            this.setState({text: newProps.initialInputValue, options: []});
        }
    }

    handleInputFocus () {
        if (this.state.text === this.props.placeholder) {
            this.setState({text: ''});
        }
    }
    
    onLocationInput(text) {
        this.setState({text});
        fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=AIzaSyDGIXl-W13BksPlK6lXUIM1UvVb__3VPec`)
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.setState({options: res.predictions});
            })
            .catch(err => {
                return console.log(err);
        });
    }

    render () {
       return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    round
                    noIcon
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.inputStyle}
                    onChangeText={this.onLocationInput}
                    onFocus={this.handleInputFocus}
                    value={this.state.text} 
                />
                <ScrollView>
                    <FlatList
                        keyExtractor={item => item.description}
                        style={styles.list}
                        data={this.state.options}
                        renderItem={(row) => (
                            <ListItem
                                onPress={() => this.props.onChoiceSelect(row.item.place_id)}
                                title={row.item.description}
                            />
                        )}
                    />
                </ScrollView>
            </View>
        ); 
    }
}

ListSearch.propTypes = {
    onChoiceSelect: PropTypes.func,
    initialInputValue: PropTypes.string,
    placeholder: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 0, flexShrink: 0, flexBasis: 'auto',
        maxHeight: 250
    },
    list: {
        flexGrow: 0, 
        flexShrink: 0, 
        flexBasis: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    searchContainer: {
        backgroundColor: 'rgb(37, 30, 72)'
    },
    searchInput: {
        borderWidth: 1,
        borderColor: 'rgb(128, 127, 227)',
        backgroundColor: 'tranparent', 
        color: 'rgb(255, 255, 255)'
    }
});
