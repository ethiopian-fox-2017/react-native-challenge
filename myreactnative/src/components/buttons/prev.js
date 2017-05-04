import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './prev.style';


const Prev = props => (

    <View style={styles.container}>
      <TouchableOpacity onPress={()=>props.press(0)} >
      <Text style={styles.text}>Today</Text>
        </TouchableOpacity>
    </View>

);

export default Prev;
