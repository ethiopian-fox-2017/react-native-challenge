import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './next.style';


const Next = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={()=> props.press(1)}>
     <Text style={styles.text}>Tomorow</Text>
    </TouchableOpacity>
  </View>
);

export default Next;
