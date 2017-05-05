/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './components/App'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeChallenge extends Component {
  render() {
    return(
      <App />
    )
  }
}

AppRegistry.registerComponent('ReactNativeChallenge', () => ReactNativeChallenge);
