import React, { Component } from 'react';
import { Container,
  Content,
  ListItem,
  Text,
  Button,
  ActionSheet,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon } from 'native-base';

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class Profile extends Component {
    constructor(props) {
      super(props)

    }


    render() {
        return (
            <Container>
                <Header>
                  <Left>
                    <Button transparent>
                      <Icon name="heart" size={20} color='red' />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Hello</Title>
                  </Body>
                  <Right />
                </Header>
                <Content>

                    <Button onPress={()=> ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        title: 'Testing ActionSheet'
                      },
                      (buttonIndex) => {
                        this.setState({ clicked: BUTTONS[buttonIndex] });
                      }
                      )}><Text>Actionsheet</Text></Button>
                    <ListItem itemHeader first>
                        <Text>COMEDY</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Hangover</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Horrible Bosses</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Conjuring</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>ACTION</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

export default Profile
