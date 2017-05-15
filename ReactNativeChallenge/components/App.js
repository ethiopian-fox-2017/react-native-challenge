import React from 'react';
import {
  View,
  Text
} from 'react-native';

import ListItem from './ListItem';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DD0E1',
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
};

class App extends React.Component {

  constructor(props){
      super(props);
      this.state={
        data: []
      }
  }

  componentDidMount(){
    fetch('http://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({data: data.results});
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SWAPI API
        </Text>
        <Text style={styles.instructions}>
          Starships :
        </Text>
        <ListItem  items={this.state.data} />
      </View>
    );
  }

}



export default App;
