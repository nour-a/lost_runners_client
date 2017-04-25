import React, { Component, PropTypes } from 'react';
import { StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

import * as actions from '../actions/actions.location';

class Destination extends Component {
    constructor () {
        super();
        this.state = {loading: true};
    }
    componentDidMount () {
        this.props.fetchUserLocation();
    }
    render() {
        // const {region} = this.props;

        return (
            <View style ={styles.container}>
                {Object.keys(this.props.startLocation).length > 0 && <MapView
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                region={Object.assign({}, this.props.startLocation, {longitudeDelta: 0.1, latitudeDelta: 0.1})}
                >
                <Marker 
                coordinate={this.props.startLocation}
                draggable={true}
                
                onDragEnd={(e) => console.log('drag end', e)}
                
                />
                </MapView>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

Destination.propTypes = {
    fetchUserLocation: PropTypes.func,
    startLocation: PropTypes.object
};


function mapStateToProps(state) {
    console.log(state);
    return {
        startLocation: state.startLocation
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUserLocation: () => {
            dispatch(actions.fetchUserLocation());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Destination);