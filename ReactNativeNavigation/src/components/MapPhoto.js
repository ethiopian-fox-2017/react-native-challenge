import React from 'react';
import MapView from 'react-native-maps';
import {
  View,
  Dimensions
} from 'react-native';

const MapPhoto = (props) => {
  let coordinate = new MapView.AnimatedRegion({
        latitude: props.photo.latitude,
        longitude: props.photo.longitude,
      });
  return (
    <View>
      <MapView style={styles.map}
      initialRegion={{
        latitude: props.photo.latitude,
        longitude: props.photo.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      >
        <MapView.Marker.Animated coordinate={coordinate} />
      </MapView>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {
  map: {
    height: deviceHeight * 0.5,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MapPhoto;
