import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import { Card, CardItem,Text, Button, Icon, Left, Body } from 'native-base';


class ListPhoto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { photo } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Image
              style={{width: 60, height: 60, borderRadius: 100}}
              source={{uri: photo.user.userpic_url }}
            />
            <Body>
              <Text>{photo.user.fullname}</Text>
              <Icon active name="camera" />
              <Text>{photo.camera}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{width: 360, height: 360}}
            source={{uri: photo.image_url }}
          />
        </CardItem>
        <CardItem content>
          <Text>
            {photo.description}
          </Text>
        </CardItem>
        <CardItem style={{justifyContent: 'space-around'}}>
          <Button transparent>
              <Icon active name="eye" />
              <Text>{photo.times_viewed}</Text>
          </Button>
          <Button transparent>
              <Icon active name="heart" />
              <Text>{photo.votes_count}</Text>
          </Button>
        </CardItem>

      </Card>
    )
  }
}

export default ListPhoto;
