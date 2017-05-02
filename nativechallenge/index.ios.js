import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src/components/App.js'

export default class nativechallenge extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('nativechallenge', () => nativechallenge)
