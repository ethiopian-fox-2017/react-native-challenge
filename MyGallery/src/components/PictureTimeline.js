import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';


import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';


export class PictureTimeline extends React.Component {
  render () {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://unsplash.it/300/400/?random'}} />
                <Body>
                  <Text>Ini User</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: 'https://unsplash.it/300/400/?random'}}
                style={{height: 300, width: 400}}
              />
            </CardItem>
            <CardItem content>
              <Text>
                Wait a minute. Wait a minute, Doc. Uhhh...
                Are you telling me that you built a time machine... out of a DeLorean?!
                Whoa. This is heavy.
              </Text>
            </CardItem>
            <CardItem>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
              <Text> 11 h ago</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default PictureTimeline;
