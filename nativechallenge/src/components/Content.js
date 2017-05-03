import React from 'react'
import { connect } from 'react-redux';

import { fetchData } from '../actions/nativeActionsCreator';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import {
  CardItem,
  Card,
  Icon,
  Button,
  Container,
  Thumbnail,
  Body,
  Left
} from 'native-base';

import Header from './Header';
import Footer from './Footer';

class Content extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <View>
        <CardItem
          style={{ justifyContent: 'space-between'}}
          header>
          <Button
            iconleft light
            onPress={() => this.props.navigation.navigate('Profile')}
          ><Icon name='arrow-back' /><Text>Back</Text>
          </Button>
          <Text style={{ fontSize: 22 }}>SpotifyApp</Text>
          <Button
            iconleft light
            onPress={() => this.props.navigation.navigate('Swipper')}
          ><Icon name='arrow-forward' /><Text>Next</Text>
          </Button>
        </CardItem>

          <ScrollView style = {styles.content}>
            { this.props.datas.length == 0 ? <ActivityIndicator
              animating={true}
              style={[styles.centering, {height: '100%'}]}
              size="large"
            />  :
            this.props.datas.map(data => (

            <View style={styles.contentView} key={data.id} >
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri : 'https://scontent-sit4-1.cdninstagram.com/t51.2885-19/s150x150/15877059_1462723210434512_6530061937466671104_a.jpg'}} />
                    <Body>
                      <Text style = {{ fontSize: 18, padding: 10}}
                        onPress={() => this.props.navigation.navigate('Swipper')}
                        >{data.name }
                      </Text>
                      <Text note style={{color: '#888'}}>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <Image
                    source = {{ uri: data.images[0].url }}
                    style = {{ width: '100%', height: 200 }}
                  />
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
                  <Text>11h ago</Text>
                </CardItem>
              </Card>
            </View>
              ))
            }

          </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    backgroundColor: '#fff',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
  }
});

const mapStateToProps = state => ({
    datas: state.datas
})

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
