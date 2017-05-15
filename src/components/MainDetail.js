import React from 'react'
import { Image, Modal, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Form, Input, Label, Item} from 'native-base'
import ModalBooking from './ModalBooking'
import HeaderNavigationDetail from './HeaderNavigationDetail'
class MainDetail extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       modalVisible : false
     }
     this.setModalVisible = this.setModalVisible.bind(this)
   }

   setModalVisible(visible) {
     this.setState({modalVisible: visible});
    }

    render() {
      const {params} = this.props.navigation.state
        return (
            <Container>
              <HeaderNavigationDetail navigation={this.props.navigation} titleNav={'Detail Place'}/>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>

                                <Body>
                                    <Text>{params.restaurant.name}</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image style={{ resizeMode: 'cover', width: 300, height: 300 }} source={{uri : params.restaurant.featured_image}} />
                                <Text>
                                    {params.restaurant.location.address}
                                </Text>
                                <Button onPress={() => this.setModalVisible(true)} iconLeft>
                                      <Icon name='md-bookmarks'/>
                                  <Text>Booking This Place</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                   <ModalBooking modalVisible={this.state.modalVisible} navigation={this.props.navigation} restaurant={params.restaurant}/>
                </Content>
            </Container>
        );
    }
}

export default MainDetail
