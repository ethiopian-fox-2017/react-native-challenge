import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  StatusBar
} from 'react-native';

import Item from './Item';
import { fetchPhoto } from '../actions';

class ListItem extends React.Component {

  constructor(props){
    super(props);
  }

  static navigationOptions = { title: 'Hello Photographer', };

  componentDidMount(){
    this.props.fetchPhoto();
  }

  render() {
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3F51B5"
        barStyle="light-content" />

        <Text style={styles.welcome}>
          Photography
        </Text>
        <ScrollView >
        <View style={styles.viewStyle}>
      {this.props.photos.length === 0 && <Text>Loading...</Text>}

        { this.props.photos.map(item => {
          // console.log(item);
          return (
          <Item key={item.id} item={item}
            navigation = {this.props.navigation}
          />
          )

        })
        }
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: () => dispatch(fetchPhoto())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
