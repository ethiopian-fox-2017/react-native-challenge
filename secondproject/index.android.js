import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import { Header, Jokes } from './components'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class secondproject extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <Jokes />
        </View>
      </Provider>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'teal',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}

AppRegistry.registerComponent('secondproject', () => secondproject);
