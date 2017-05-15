import React from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';
class HeaderNavigationDetail extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
            <Header style={{backgroundColor : '#FF5722'}}>
                <Left>
                    <Button onPress={() => this.props.navigation.goBack()}transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.titleNav}</Title>
                </Body>
                <Right>
                </Right>
            </Header>
    )
  }
}

export default HeaderNavigationDetail
