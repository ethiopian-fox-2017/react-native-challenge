import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import ListPhoto from './ListPhoto'
import Detail from './Detail'

const App = StackNavigator({
  ListPhoto: {screen: ListPhoto},
  Detail: {screen: Detail}
})

export default App
