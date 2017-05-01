import React, { Component, PropTypes } from 'react';
import { StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import ListSearch from './ListSearch';

import {fetchUserLocation} from '../actions/actions.location';
import {setUserDestination, fetchDestinationCoords} from '../actions/actions.destination';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

class Destination extends Component {
    componentDidMount () {
        this.props.fetchUserLocation();
    }
    
    render() {
        const {locationReady, destinationReady} = this.props;
        const destination = destinationReady ? `${this.props.destination.longitude}, ${this.props.destination.latitude}` : '...';
        return (
            <View style={styles.container}>
                <ListSearch
                    label='To:'
                    placeholder='...'
                    initialInputValue={destination}
                    onChoiceSelect={this.props.fetchDestinationCoords}
                />
                {locationReady && <View style={styles.mapContainer}>
                    <MapView
                        onLongPress={(e) => this.props.setUserDestination(e.nativeEvent.coordinate) }
                        style={styles.map}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        region={Object.assign({}, this.props.startLocation, {longitudeDelta: 0.1, latitudeDelta: 0.1})}
                    >
                        <Marker
                            coordinate={this.props.startLocation}
                            draggable={true}
                            onDragEnd={(e) => console.log('drag end', e)}
                        >
                            <Icon name="person-pin" size={40} color="rgb(35, 28, 99)" />
                        </Marker>
                        {destinationReady &&
                        <Marker 
                            coordinate={this.props.destination}
                            draggable={true}
                            onDragEnd={(e) => this.props.setUserDestination(e.nativeEvent.coordinate) }
                        >
                            <Icon name="flag" size={40} color="rgb(250, 0, 0)" />
                        </Marker>
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
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop: 54
    },
    mapContainer: {
         ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 50,
        zIndex: -10
    },
});

Destination.propTypes = {
    fetchUserLocation: PropTypes.func,
    startLocation: PropTypes.object,
    setUserDestination:PropTypes.func,
    destination: PropTypes.object,
    locationReady: PropTypes.bool,
    destinationReady: PropTypes.bool,
    fetchDestinationCoords: PropTypes.func
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
        },
        fetchDestinationCoords: (id) => {
            dispatch(fetchDestinationCoords(id));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Destination);
