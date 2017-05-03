import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import styles from '../assets';

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
              <Text note>{photo.camera}</Text>
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

      </Card>
    )
  }
}

export default ListPhoto;
