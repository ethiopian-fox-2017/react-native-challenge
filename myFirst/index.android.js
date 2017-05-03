/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store/';
import Button from './src/components/Button';
import styles from './src/assets/index.js';
import Header from './src/components/Header';
import Content from './src/components/Content';


export default class myFirst extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            <Content />
          </ScrollView>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { _scrollView.scrollTo({y: 0}); }}>
              <Text>Scroll to top</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => { _scrollView.scrollToEnd({animated: true}); }}>
              <Text>Scroll to bottom</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('myFirst', () => myFirst);
