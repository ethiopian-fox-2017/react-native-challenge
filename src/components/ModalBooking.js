import React from 'react'
import { Image, Modal, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Button, Icon, Left, Body , Form, Input, Label, Item, Picker} from 'native-base'
import HeaderNavigationDetail from './HeaderNavigationDetail'

class ModalBooking extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible : false,
      selectedItem: undefined,
      selected1: 'key1',
      results: {
          items: []
          }
    }
  }

  componentWillReceiveProps(nextProps){

  }

  onValueChange (value: string) {
    this.setState({
        selected1 : value
    });
}

  render(){
    return(
      <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.props.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
         <Container>
          <HeaderNavigationDetail navigation={this.props.navigation} titleNav={'Reservation'}/>
            <Content>
               <Form>
                 <Item>
                   <Input placeholder='Pemesanan atas Nama'/>
                     <Icon active name='swap' />
                 </Item>
               </Form>
               <Picker
                 supportedOrientations={['portrait','landscape']}
                 iosHeader="Select one"
                 mode="dropdown"
                 selectedValue={this.state.selected1}
                 onValueChange={this.onValueChange.bind(this)}>
                <Item label="Wallet" value="key0" />
                <Item label="ATM Card" value="key1" />
                <Item label="Credit Card" value="key2" />
                <Item label="Debit Card" value="key3" />
                </Picker>
                <Form>
                    <Item>
                    <Button iconLeft>
                        <Icon name='md-bookmarks' />
                          <Text>Booking Now</Text>
                    </Button>
                    </Item>
                </Form>
           </Content>
       </Container>
       </Modal>
    )
  }
}

export default ModalBooking
