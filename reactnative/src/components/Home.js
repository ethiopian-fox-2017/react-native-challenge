import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Coldplay Albums'
    }
  }
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: {
       color: 'black',
       flex: 1,
       alignSelf: 'center',
       marginTop: 10
    },
    headerStyle: {
      backgroundColor: '#dddddd',
      flexDirection: 'row',
      justifyContent: 'center',
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Header nama={this.state.name} navigation={this.props.navigation}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default Home;
