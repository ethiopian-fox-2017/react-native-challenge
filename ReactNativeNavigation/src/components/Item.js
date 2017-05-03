import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = {

  imageStyle: {
    width: deviceWidth * 0.327,
    height: deviceWidth * 0.327,
    position: 'relative'
  }
}

const Item = (props) => {
  const { navigate } = props.navigation;
  return (
    <View >
      <TouchableHighlight onPress={() => navigate('Detail', { item: props.item }) }>
        <Image style={styles.imageStyle}
        source={{uri: props.item.image_url[0]}}
        />
      </TouchableHighlight>

    </View>
  )
}

export default Item;
