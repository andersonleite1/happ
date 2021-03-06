import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import mapMarker from '../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';

export default function SalonsMap(){
    const navigation = useNavigation();

    function handlerNavigateToSalonsDetails(){
        navigation.navigate('SalonsDetails');
    }

    function handlerNavigateToCreateSalon(){
        navigation.navigate('SelectMapPosition');
    }

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
          <Callout tooltip onPress={handlerNavigateToSalonsDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Salão Novo Visual
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Salões encontrados</Text>
        <RectButton style={styles.createSalonButton} onPress={handlerNavigateToCreateSalon}>
          <Feather name="plus" size={20} color="#fff"/>
        </RectButton>
      </View>
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
      fontFamily: 'Nunito_700Bold',
      fontSize: 15,
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 46,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3',
    },
  
    createSalonButton: {
      width: 56,
      height: 56,
      backgroundColor: '#913AF3',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  