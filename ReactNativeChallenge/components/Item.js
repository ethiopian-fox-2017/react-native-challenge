import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const styles = {
  itemStyle: {
    flexDirection: 'column'
  },
  imageStyle: {
    width: 300,
    height: 200
  }
}

const Item = (props) => {
  return (
    <View style={styles.itemStyle}>
      
      <Text>{props.itemId} | {props.itemName} </Text>
    </View>
  )
}

export default Item;
