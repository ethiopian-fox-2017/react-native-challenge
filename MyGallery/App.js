import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { Container } from 'native-base';

import store from './src/stores';
import { PictureTimeline, MainHeader, MainFooter } from './src/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainHeader />
          <PictureTimeline />
          <MainFooter />
        </Container>
      </Provider>
    );
  }
}

export default App;
