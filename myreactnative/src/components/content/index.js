import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import styles from './index.style';
import ForcastView from './forcastView';
import Buttons from '../buttons'
class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0 ,

    };
  }
  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }
  updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
  render() {
    const { forecast } = this.props.weathers
    const {selectedIndex} = this.state
    return (
     <View style={styles.container}>
       <ForcastView weather={forecast.forecastday[selectedIndex]} />
       <Buttons updateIndex={index => this.updateIndex(index)} />
      </View>
    );
  }
}


const mapStateToprops = state => ({ weathers: state.weathers });

export default connect(mapStateToprops,null) (Content);
