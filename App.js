import React, { Component } from 'react';
import { Dimensions, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import MapView from 'react-native-maps';
import styleView from './src/css/styleview';

export default class App extends Component {

  state = {
    focusedlocation: {
      latitude: 13.0162143,
      longitude: 77.5474441,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122
    },
    locationChosen: false
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedlocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedlocation: {
          ...prevState.focusedlocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
      err => {
        console.log(err);
        alert("Fetching the position failed, please enable GPS manually!");
      })
  }

  render() {
    let marker = null;

    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedlocation} />;
    }
    return (
      <View style={styleView.container}>
        <StatusBar
          backgroundColor="#117864"
          barStyle="light-content"
        />
        <View style={styleView.headerView}>
          <Text style={styleView.textHeader}>
            React-Native Codility
          </Text>
        </View>
        <View style={styleView.mapContainer}>
          <MapView
            style={styleView.map}
            initialRegion={this.state.focusedlocation}
            onPress={this.pickLocationHandler}
            ref={ref => this.map = ref}
          >
            {marker}
          </MapView>
        </View>
        <TouchableOpacity onPress={this.getLocationHandler}>
          <Text style={styleView.buttonStyle}>Locate Me </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
