import React from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class SideBar extends React.Component {

  constructor(props){
    super(props);

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <TouchableHighlight onPress={() => navigate('Main') }>
        <Text>Home</Text>
      </TouchableHighlight>
      </View>
    )
  }

}

export default SideBar;
