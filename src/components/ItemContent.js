import React from 'react'
import {Image} from 'react-native'
import { Container,View, Content, Card, CardItem, Left, Body,Thumbnail, Text, Button, Icon } from 'native-base'

class ItemContent extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Card >
            <CardItem>
                  <Left>
                      <Body>
                          <Text>{this.props.restaurant.name}</Text>
                          <Text note>{this.props.restaurant.R.cuisines}</Text>
                      </Body>
                  </Left>
             </CardItem>
              <CardItem cardBody>
                  <Image
                   style={{width: 400, height : 200}}
                   source={{uri : this.props.restaurant.featured_image}}/>
              </CardItem>
              <CardItem content>
              <Text>{this.props.restaurant.location.address}</Text>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-around' }}>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                    <Text>{this.props.restaurant.user_rating.votes}</Text>
                  </Button>
                <Button transparent>
                  <Icon active name="star" />
                    <Text>{this.props.restaurant.user_rating.aggregate_rating}</Text>
                  </Button>
                  <Button onPress={() => this.props.navigation.navigate('DetailContent',{restaurant : this.props.restaurant})}iconLeft>
                          <Icon name='bookmark' />
                          <Text>Booking</Text>
                      </Button>
            </CardItem>
      </Card>
    )
  }
}

export default ItemContent
