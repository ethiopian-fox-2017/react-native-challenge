import React, { Component } from 'react';
import { Image } from 'react-native';

import {
  Container,
  Icon,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body } from 'native-base';

  const cards = [
    {
        text: 'Card One',
        name: 'Salad Healthy',
        image: 'https://media.istockphoto.com/photos/pumpkin-salad-picture-id635912088',
    },
    {
        text: 'Card Two',
        name: 'Mayonais',
        image: 'https://media.istockphoto.com/photos/delicious-benedict-eggs-picture-id610847948',
    },
    {
        text: 'Card Three',
        name: 'Selai Nanas',
        image: 'https://media.istockphoto.com/photos/egg-benedict-toast-english-breakfast-plate-concept-picture-id483281364',
    },
    {
        text: 'Card Four',
        name: 'Cafe Latte',
        image: 'https://media.istockphoto.com/photos/mushroom-cream-soup-isolated-on-white-picture-id518620350',
    },
    {
        text: 'Card Five',
        name: 'Sledri',
        image: 'https://media.istockphoto.com/photos/pumpkin-salad-picture-id635912088',
    },

];

class Swipper extends React.Component {
  render () {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={(item) =>
                <Card style={{ elevation: 4 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.image }} style={{ height: 200, width: 200 }} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>{item.name}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                    <CardItem cardBody>
                        <Text>{ item.name }</Text>
                    </CardItem>
                    <CardItem>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Text>{item.name}</Text>
                    </CardItem>
                </Card>
              }
            />
        </View>
      </Container>
    );
  }
}

export default Swipper;
