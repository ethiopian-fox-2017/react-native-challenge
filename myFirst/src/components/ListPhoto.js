import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import styles from '../assets';

class ListPhoto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { photo } = this.props;
    return (
      <TouchableOpacity onPress={() => Linking.openURL(`http://500px.com/${photo.url}`)}>
        <View style={styles.content}>
            <Image
              style={{width: 150, height: 150}}
              source={{uri: photo.image_url }}
            />
          <View style={styles.contentFirst}>
            <Text>Photographer:</Text>
            <Text>{photo.user.fullname}</Text>
            <Text>Camera: {photo.camera}</Text>
            <Text>Camera: {photo.camera}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default ListPhoto;
