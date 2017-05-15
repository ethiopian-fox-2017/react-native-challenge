/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, } from 'react-navigation';
// import {
//   Text,
//   View
// } from 'react-native';

import ListItem from './ListItem';
import DetailItem from './DetailItem';
import CameraApp from './CameraApp';


const App = StackNavigator({
  Main: {screen: ListItem},
  Detail: {screen: DetailItem},
  CameraApp: {screen: CameraApp},
});

export default App;
