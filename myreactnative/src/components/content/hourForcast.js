import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { Avatar, Card } from 'react-native-elements';

const HourForcast = props => {
  const time = props.hour.time.split(' ')[1];
  return (
    <View style={{ width: '100%', height: '100%' ,justifyContent:'center', alignItems:'center'}}>
      <Text>{time}</Text>
      <Image source={{ uri: `https:${props.hour.condition.icon}` }}
        style={{width: '75%', height: '80%'}} >
      </Image>
    </View>
  );
};

export default HourForcast;
