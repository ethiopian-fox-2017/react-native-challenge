import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';


import App from './App';

export default class MyGallery extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('MyGallery', () => MyGallery);
