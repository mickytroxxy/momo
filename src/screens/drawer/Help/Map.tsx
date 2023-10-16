import React, {useEffect, useRef, useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';

import {renderLocationItem} from '@/component/molecule/Dropdown/Dropdown.stories';
import {locationData} from '@/fixtures/dummyData';
import {Box} from '@atom';
import {Dropdown} from '@molecule';
import {PermissionsAndroid} from 'react-native';
import CustomPermissionDialog from './Dialog';

const RestaurantMap = ({handleSnapPress}: any) => {
  const [initialPosition, setInitialPosition] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted) {
        getLocation();
      } else {
        setShowPermissionDialog(true);
      }
    } else if (Platform.OS === 'ios') {
      const result = await Geolocation.requestAuthorization('whenInUse');

      if (result === 'granted') {
        getLocation();
      } else if (result === 'denied') {
        setShowPermissionDialog(true);
      }
    }
  };

  const handleRequestAllow = () => {
    setShowPermissionDialog(false);
    if (Platform.OS === 'android') {
      requestLocationPermission();
    } else if (Platform.OS === 'ios') {
      getLocation();
    }
  };

  const handleRequestDeny = () => {
    setShowPermissionDialog(false);
    handleSnapPress(0);
    // Handle the case where the user denied the permission
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show nearby Agents.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      }
      handleSnapPress(0);
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const initialPos = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setInitialPosition(initialPos);
      },
      error => console.error('Error getting location:', error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  const fetchRestaurants = async (latitude: any, longitude: any) => {
    // Implement your logic to fetch nearby Agents using an API here
    // Example: const response = await fetch(`YOUR_API_URL?lat=${latitude}&long=${longitude}`);
    // const restaurantsData = await response.json();
    // setRestaurants(restaurantsData);
    // Map the restarants to display Markers in the mapview
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialPosition} />
      <Box
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: 20,
          left: 20,
          right: 20,
          borderRadius: 12,
        }}
        px={'hsm'}
        py={'vsm'}>
        <Dropdown
          renderItem={renderLocationItem}
          data={locationData}
          label="Search Agent"
          ref={ref}
          //   onSelect={setValue}
          value={''}
          search
          location
        />
      </Box>
      <CustomPermissionDialog
        visible={showPermissionDialog}
        onRequestAllow={handleRequestAllow}
        onRequestDeny={handleRequestDeny}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default RestaurantMap;
