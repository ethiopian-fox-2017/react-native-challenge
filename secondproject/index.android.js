import React from 'react'

import {
  AppRegistry,
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import App from './src/App'
import About from './src/About'
import ImagesList from './src/ImagesList'
import Jokes from './src/components/Jokes'

const SimpleApp = StackNavigator({
  Home: {screen: App},
  About: {screen: About},
  ImagesList: {screen: ImagesList},
  Jokes: {screen: Jokes},
})

AppRegistry.registerComponent('secondproject', () => SimpleApp)
