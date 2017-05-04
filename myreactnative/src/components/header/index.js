import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
} from 'react-native';
import styles from './header.style';

class Header extends Component {
  render() {
    return (
      <View style={styles.header} >
        <Text style={styles.logo}>
           My weather
        </Text>
      </View>
    );
  }
}

const mapStateToprops = state => ({ weathers: state.weathers });
const mapDispatchToProps = dispatch => ({ fetchWeathers: () => dispatch(fetchWeather()) });

export default connect(mapStateToprops, mapDispatchToProps)(Header);
