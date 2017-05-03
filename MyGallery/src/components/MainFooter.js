import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Footer, FooterTab, Button, Text } from 'native-base';


export class MainFooter extends React.Component {
  render() {
    return (
      <Footer style={{backgroundColor: 'teal'}}>
        <FooterTab>
          <Button>
            <Icon
              name="md-arrow-back"
            />
            <Text>Apps</Text>
          </Button>
          <Button>
            <Icon name="md-arrow-back" />
            <Text>Camera</Text>
          </Button>
          <Button active>
            <Icon active name="md-arrow-back" />
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Icon name="md-arrow-back" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
