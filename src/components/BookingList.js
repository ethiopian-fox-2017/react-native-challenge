import React from 'react'
import {Container,Content,List,Icon,ListItem,Thumbnail,Text,Body, Right, Button} from 'native-base'
import {ListView} from 'react-native'
import axios from 'axios'
import {fetchBooking} from '../actions'
import { connect } from 'react-redux'

class BookingList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentDidMount(){
    this.props.fetchBooking()
  }

  render(){
    return (
      <Container>
          <Content>
          <List>
            {this.props.bookings.map(booking => (
                <ListItem>
                <Thumbnail square size={80} source={{
                  uri : booking.image_booking
                }} />
                      <Body>
                          <Text>{booking.restaurant}</Text>
                          <Icon style={{marginLeft : 10, marginRight:5, color: '#3F51B5'}} name="md-contact">
                          <Text style={{marginLeft : 5,fontWeight: 'normal', fontSize: 16, color: '#3F51B5'}}> {booking.person} Person</Text>
                          </Icon>
                      </Body>
                      <Right>
                      <Button transparent primary iconLeft>
                        <Icon name='md-close' />
                      </Button>
                      </Right>
                  </ListItem>

            ))}
            </List>
          </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  bookings : state.bookings
})

const mapDispatchToProps = (dispatch) => ({
  fetchBooking : () => dispatch(fetchBooking())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingList)
