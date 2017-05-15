import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Icon, Button } from 'native-base';

import Contents from './Content'

class Header extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.navbar}>

        <Text style={{textAlign: 'center', marginTop: 10, color: '#4a474b', fontSize: 22}}>
          { this.props.nama }
        </Text>
        <Container style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Content>
            <Button
              block success
              onPress={() => navigate('Content')}
            >
              <Text>Go to contents</Text>
            </Button>
          </Content>
        </Container>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '1%',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#b7efff',
  },
  navbarChil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});



export default Header;
