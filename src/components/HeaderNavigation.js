import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
class HeaderNavigation extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
            <Header style={{backgroundColor : '#FF5722'}}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{justifyContent: 'center', alignItems: 'center', marginLeft: 50, width: '100%'}}>
                    <Title>Foodtopia</Title>
                </Body>
                <Right>
                <Button onPress={() => this.props.navigation.navigate('Login')}>
                    <Icon name='home' />
                </Button>
                </Right>
            </Header>
    )
  }
}

export default HeaderNavigation;
