import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import ListMovie from './ListMovie'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('http://swapi.co/api/films/')
    .then(response => response.json())
    .then(
      (data) => {
        console.log(data);
        this.setState({movies: data.results})
      }
    )
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native SWAPI
        </Text>
        <View style={styles.list}>
          <ListMovie movieList={this.state.movies} />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  list: {
    backgroundColor:'papayawhip',
    flex: 1,
    width:'100%',
    alignItems:'center'
  }
};

export default App;
