/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Profile from './Profile';
import Swipper from './Swipper';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: 'SpotifyApp'
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header {...this.state}/>
//         <Content />
//         <Footer />
//       </View>
//     );
//   }
// }

const App = StackNavigator({
  Main: {screen: Content},
  Profile: {screen: Profile},
  Swipper: {screen: Swipper}
})

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  navbar: {
    width: '100%',
    height: '10%',
    backgroundColor: '#2196F3'
  },
  content: {
    width: '100%',
    height: '80%',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#80CBC4',
    justifyContent: 'flex-end',
    borderTopWidth: 1
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnFooter: {
    width: '20%',
  }
});

export default App;
