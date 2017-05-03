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
import { Container, Content, Title, Left, Right, Body, Icon } from 'native-base';


import store from '../store/';
import Button from './Button';
import styles from '../assets/index.js';
import Headernih from './Header';
import Contentnih from './Content';


export default class Home extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Headernih navigation={this.props.navigation}/>
          <Content style={styles.content}>
            <Contentnih />
          </Content>
        </Container>
      </Provider>
    );
  }
}
