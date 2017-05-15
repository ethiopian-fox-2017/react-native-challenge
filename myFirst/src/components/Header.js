import React, { Component } from 'react';
import { Header, Title, Right, Body } from 'native-base';


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
