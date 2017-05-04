import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from './index.style';
import Next from './next';
import Prev from './prev'


const Buttons = props => (
  <View style={styles.container}>
    <Prev press={props.updateIndex} />
    <Next press={props.updateIndex} />
  </View>
);

export default Buttons;
