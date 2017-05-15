import React from 'react'
import { Container, Content, Button, Icon, Fab, View } from 'native-base';

class NavigationContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active : 'false'
    }
  }

  render(){
    return (
    <View>
        <Fab
          active={this.state.active}
          direction="up"
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
         >
         <Icon name="md-add" />
         <Button onPress={() => this.props.navigation.navigate('BookingContent')} style={{ backgroundColor: '#34A34F' }}>
             <Icon name="md-bookmarks" />
         </Button>
         <Button style={{ backgroundColor: '#3B5998' }}>
             <Icon name="md-text" />
          </Button>
         </Fab>
     </View>
    )
  }
}

export default NavigationContent
