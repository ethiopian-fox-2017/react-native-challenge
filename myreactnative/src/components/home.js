import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import {fetchWeather} from '../actions'
import { SearchBox,HomeInfo } from './homeComponent'

class Home extends React.Component {
  static navigationOptions = {
  title: 'Home',
  };
  componentDidMount() {
    this.props.fetchWeathers('Jakarta');
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', width:'100%' }} >
        <SearchBox />
        <HomeInfo/>
        <View style={{width:'100%'}}>
        <Button
         icon={{name: 'cloud'}}
         title='Forecast'
         buttonStyle={{ marginLeft: 0, marginRight: 0 }}
         onPress={() => navigate('Weather')}
         />
        </View>
      </View>
    );
  }
}

const mapStateToprops = state => ({ weathers: state.weathers});
const mapDispatchToProps = dispatch => ({ fetchWeathers: (city) => dispatch(fetchWeather(city)) });
export default connect(mapStateToprops, mapDispatchToProps)(Home);
