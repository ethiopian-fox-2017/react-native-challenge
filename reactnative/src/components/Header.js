import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Icon, Button   } from 'native-base';

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
        <View style={styles.navbarChil}>
          <Container>
            <Content>
              <Button
                onPress={() => navigate('Content')}
                iconLeft light
              >
                <Text>Go to Content</Text>
                <Icon name='home' />
              </Button>
            </Content>
          </Container>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '10%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b7efff',
  },
  navbarChil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



export default Header;
