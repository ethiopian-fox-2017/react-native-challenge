import React, { Component } from 'react'
import { Provider } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

import store from './store'
import { Header, Jokes } from './components'

class App extends Component {
  static navigationOptions = {
    title: 'Welcome to React Native'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button
            title='Go to About'
            onPress={() => navigate('About')}
          />
          <Button
            title='Go to Images'
            onPress={() => navigate('ImagesList')}
          />
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

export default App