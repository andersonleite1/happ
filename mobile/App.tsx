import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -14.8521574,
          longitude: -40.8475082,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
      > 
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 3.1,
            y: 0.8,
          }}
          coordinate={{
            latitude: -14.8521574,
            longitude: -40.8475082,
          }}
        >
          <Callout tooltip onPress={() => {alert('Olá')}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Salão Novo Visual
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 15,
  },
  
});
