import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

import styles from '../assets'

class Headernih extends Component {

  render() {
    return (
      <Header>
          <Body>
              <Title>Daily Inspiration</Title>
          </Body>
          <Right>
            <Title onPress={() => {this.props.navigation.navigate('About')} }>
              About
            </Title>
          </Right>
      </Header>
    );
  }
}

export default Headernih;
