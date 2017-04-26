import React, { Component, PropTypes } from 'react';
import { StyleSheet, View} from 'react-native';

import {connect} from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

import {fetchUserLocation} from '../actions/actions.location';
import {setUserDestination} from '../actions/actions.destination';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

class Destination extends Component {
    componentDidMount () {
        this.props.fetchUserLocation();
    }
    render() {
        const {locationReady, destinationReady} = this.props;

        return (
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                        style={{height: 200, flex: 1, marginTop: 100}}
                        placeholder='To'
                        minLength={3}
                        autoFocus={false}
                        listViewDisplayed='auto'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            console.log('data', data);
                            console.log('details', details);
                        }}
                        getDefaultValue={() => {
                            return '';
                        }} 
                    />         
                {locationReady && <View style={styles.container}>
                    <MapView
                    onLongPress={(e) => this.props.setUserDestination(e.nativeEvent.coordinate) }
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    region={Object.assign({}, this.props.startLocation, {longitudeDelta: 0.1, latitudeDelta: 0.1})}
                    >
                    <Marker
                    pinColor={'blue'}
                    coordinate={this.props.startLocation}
                    draggable={true}
                    onDragEnd={(e) => console.log('drag end', e)}
                    />
                    {destinationReady &&
                    <Marker 
                    coordinate={this.props.destination}
                    draggable={true}
                    onDragEnd={(e) => this.props.setUserDestination(e.nativeEvent.coordinate) }
                    />
                    }
                    </MapView>
                </View>
                }
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
    startLocation: PropTypes.object,
    setUserDestination:PropTypes.func,
    destination: PropTypes.object,
    locationReady: PropTypes.bool,
    destinationReady: PropTypes.bool
};


function mapStateToProps(state) {
    return {
        startLocation: state.startLocation,
        destination: state.destination,
        locationReady: Object.keys(state.startLocation).length > 0,
        destinationReady: Object.keys(state.destination).length > 0
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUserLocation: () => {
            dispatch(fetchUserLocation());
        },
        setUserDestination: (pos) => {
            dispatch(setUserDestination(pos));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Destination);
