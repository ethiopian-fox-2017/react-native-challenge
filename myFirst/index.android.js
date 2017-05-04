/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/components/Home';
import About from './src/components/About';

const myFirst = StackNavigator({
    Home: {screen: Home},
    About: {screen: About},
  },{
    headerMode: 'none',
  }

);




AppRegistry.registerComponent('myFirst', () => myFirst);
