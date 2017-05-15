import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Home from './Home';

const App = StackNavigator({
  Home: { screen: Home },
  Content: { screen: Content },
})

export default App;
