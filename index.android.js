/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Main from './src/Main.js'
import DetailContent from './src/DetailContent'
import BookingContent from './src/BookingContent'
import LoginContent from './src/LoginContent'
import SplashScreen from './src/components/SplashScreen'

const reactlearning = StackNavigator({
  Home : { screen : SplashScreen},
  DetailContent  : {screen : DetailContent},
  BookingContent : {screen : BookingContent},
  Login : {screen : LoginContent},
},{
  headerMode : 'none',
})



AppRegistry.registerComponent('reactlearning', () => reactlearning);
