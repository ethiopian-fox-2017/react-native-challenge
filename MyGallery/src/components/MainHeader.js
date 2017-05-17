import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Left, Button, Body, Right, Title, Content, ListItem, Text, CheckBox } from 'native-base';



export class MainHeader extends React.Component {
  render() {
    return (
      <Header style={{backgroundColor: 'teal'}}>
        <Left>
          <Button transparent>
            <Icon
              name='md-arrow-back'
              style={{fontSize: 28, color: 'white'}}
            />
          </Button>
        </Left>
        <Body>
          <Title>MyGallery</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name='md-home'
              style={{fontSize: 28, color: 'white'}}
            />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default MainHeader;
