import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Content from './content';
import Buttons from './buttons';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathers: [],
      showWeater: 'lalalala',
    };
  }
  static navigationOptions = {
  title: 'Forcast',
  };
  render() {
    return (
      <View>
        <Content />
      </View>
    );
  }
}

export default Weather;
