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
              name="md-apps"
              style={{fontSize: 28, color: 'white'}}
            />
            <Text>Apps</Text>
          </Button>
          <Button>
            <Icon
              name="md-camera"
              style={{fontSize: 28, color: 'white'}}
            />
            <Text>Camera</Text>
          </Button>
          <Button active>
            <Icon
              active name="md-navigate"
              style={{fontSize: 28, color: 'white'}}
            />
            <Text>Navigate</Text>
          </Button>
          <Button>
            <Icon
              name="md-contact"
              style={{fontSize: 28, color: 'white'}}
            />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
