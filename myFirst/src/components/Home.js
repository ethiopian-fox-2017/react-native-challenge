import React, { Component } from 'react';

import { Container, Content, } from 'native-base';
import { Provider } from 'react-redux';

import store from '../store/';
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
