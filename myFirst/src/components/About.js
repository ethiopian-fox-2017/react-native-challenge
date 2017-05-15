import React, { Component } from 'react';
import { Image, Linking } from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, H1 } from 'native-base';


class About extends Component {
  static navigationOptions = {
    title: 'About',

  };
  render() {
    const { navigation } = this.props;
    return(
      <Container style={{ padding: 20 }}>

        <Content>
        <H1 style={{ textAlign: 'center' }}>About Me</H1>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Image
                  style={{width: 60, height: 60, borderRadius: 100}}
                  source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAoLAAAAJDMwNWY5NTViLWVkNDItNGQ2YS1iZjVjLTIzODhhY2I3ZGJlOQ.jpg' }}
                />
                <Body>
                  <Text>Daily Information</Text>
                  <Text note>By: Anthony Juan</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image />
            </CardItem>
            <CardItem content>
              <Text>
                Aplikasi ini dibuat dengan tujuan untuk bersenang-senang, bila ada kesamaan nama pada karakter atau tokoh, itu adalah sebuah ketidak sengajaan
              </Text>
            </CardItem>
            <CardItem style={{justifyContent: 'space-around'}}>
            <Button className="buttonGit" transparent onPress={() => {Linking.openURL('https://github.com/anthonyjuan')}}>
              <Image
              style={{width: 30, height: 30, borderRadius: 100}}
              source={{uri:'http://www.techgirlz.org/wp-content/uploads/2016/12/github-logo.png'}}
              />
            </Button>

            </CardItem>
          </Card>
        </Content>
        <Button iconLeft light onPress={() => navigation.goBack()}>
           <Icon name='arrow-back' />
           <Text>Back</Text>
         </Button>
      </Container>
    )
  }
}

export default About;
