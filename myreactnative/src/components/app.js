import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  View,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import store from '../store';
import Home from './home';
import Weather from './weather';

const App = StackNavigator({
  Home: { screen: Home },
  Weather: { screen: Weather },
});

class ConnectedApp extends Component {
  render() {
    return (<Provider store={store}><App /></Provider>);
  }
}

export default (ConnectedApp);
