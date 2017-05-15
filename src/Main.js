import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import NavigationContent from './components/NavigationContent.js'
import HeaderNavigation from './components/HeaderNavigation.js'

import { styles } from './config/'

import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import store from './store'

class Main extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          <HeaderNavigation navigation={this.props.navigation} />
          <MainContent navigation={this.props.navigation}/>
          <NavigationContent navigation={this.props.navigation}/>
        </View>
      </Provider>
    )
  }
}

export default Main
