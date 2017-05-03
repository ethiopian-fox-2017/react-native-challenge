import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from '../assets'

class Header extends Component {

  render() {
    return (
      <View style={styles.navbar}>
        <Text style={styles.headerText}> Daily Inspiration </Text>
      </View>
    );
  }
}

export default Header;
