import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from './src/store';
import App from './src/components/App.js'

export default class reactnative extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactnative', () => reactnative);
