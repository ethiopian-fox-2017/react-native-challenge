import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const PhotoItem = (props) => {
  const { navigate } = props.navigation
  return(
    <View style={styles.content}>
      <TouchableHighlight onPress={() => navigate('Detail', {detail: props.photo})}>
      <Image
          style={{width: deviceWidth * 0.327, height: '100%'}}
          source={{uri: props.photo.image_url}}
        />
      </TouchableHighlight>
    </View>
  )
}

const styles = {
  content: {
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.327,
    height: deviceWidth * 0.327,
    borderWidth: 1,
    position: 'relative'
  }
}

export default PhotoItem
