import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Container, Content, Button } from 'native-base';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#80CBC4',
    justifyContent: 'center',
    borderTopWidth: 1
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnFooter: {
    width: '20%',
    backgroundColor: 'blue',
  }
});

const Footer = () => {
  return (
    <View style = {styles.footer}>

        <Container style= {{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Content>
            <Button
              info
              onPress={() => {}}
            >
              <Text>Home</Text>
            </Button>
          </Content>
          <Content>
            <Button
              info
              onPress={() => {}}
            >
              <Text>About</Text>
            </Button>
          </Content>
          <Content>
            <Button
              info
              onPress={() => {}}
            >
              <Text>Chat</Text>
            </Button>
          </Content>
          <Content>
            <Button
              info
              onPress={() => {}}
            >
              <Text>Profile</Text>
            </Button>
          </Content>
        </Container>

    </View>
  )

}

export default Footer;
