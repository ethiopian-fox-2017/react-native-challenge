import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
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

import { fetchingUser } from '../actions'

export class PictureTimeline extends React.Component {

  componentDidMount(){
    this.props.fetchingUser()
  }

  render () {
    const { users } = this.props
    return (
      <Container>
        <Content>
          { users.map((user, index) => (
            <Card key={index}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: user.avatar}} />
                  <Body>
                    <Text>{user.name}</Text>
                    <Text note>@{user.username}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{uri: user.pictures[0].src}}
                  style={{height: 300, width: 400}}
                />
              </CardItem>
              <CardItem content>
                <Text>{user.pictures[0].description}</Text>
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
          ))}

        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchingUser: () => dispatch(fetchingUser())
})
export default connect(mapStateToProps,mapDispatchToProps) (PictureTimeline);
