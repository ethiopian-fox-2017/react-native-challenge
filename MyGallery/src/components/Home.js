import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header, Button, Body, Title, Text } from 'native-base';


export class Home extends React.Component {
  render() {
    return (
      <Header style={{backgroundColor: 'teal'}}>
        <Body>
          <Button>
            <Text>MyGallery</Text>
          </Button>
        </Body>
      </Header>
    );
  }
}

export default Home;
