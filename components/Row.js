import React, {Component, PropTypes} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Button from 'react-native-button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    alignContent: 'stretch'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});

export default class Row extends Component {
    constructor(props) {
        super(props); 
    }
    handlePress(num) {
        this.props.addNumber(num);
    }
    render() { 
        return (
            <View style={styles.container}>
                <View>
                    { (this.props.thumbnailPath.length !== 0) ? 
                        (<Image source={{ uri: this.props.thumbnailPath}} style={styles.photo} />) 
                        : (<Image source={require('./img/default-user.png')} style={styles.photo} />)
                    }
                </View>
                <View>
                    <Text style={styles.text}>       
                        {`${this.props.givenName || ''} ${this.props.familyName || ''}`}
                    </Text>  

                    <FlatList 
                    data={this.props.phoneNumbers} 
                    keyExtractor={(item, i) => i} 
                    renderItem={(item) =>                         
                        <View style={styles.col}>
                            <Text style={styles.text}>{item.item.number}</Text>                        
                            <Button onPress={() => this.handlePress(item.item.number)} style={styles.text}>select</Button>
                        </View>                            
                    }/>
                </View>
            </View>
        );
    }
}

Row.propTypes = {
    thumbnailPath: PropTypes.string,
    givenName: PropTypes.string,
    familyName: PropTypes.string,
    phoneNumbers: PropTypes.array,
    addNumber: PropTypes.func
};
