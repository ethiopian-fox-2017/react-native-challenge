import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../assets/index.js'


class Button extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Display Data</Text>
      </TouchableOpacity>
    )
  }
}

export default Button;
