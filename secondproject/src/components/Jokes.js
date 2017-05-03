import React from 'react'
import { connect } from 'react-redux'

import { fetchJokes } from '../actions/jokeAction'

import {
  Alert,
  ScrollView,
  Text,
  View,
  Button
} from 'react-native'

class Jokes extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchJokes()
  }

  render() {
    var _scrollView: ScrollView;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {this.props.jokes.length === 0 && (
            <Text>
              Loading...
            </Text>
          )}
          {this.props.jokes.map((joke, index) => (
            <View style={styles.joke} key={index}>
              <Text style={styles.jokeSetup}>
                {joke.setup}
              </Text>
              <Text style={styles.jokePunchLine}>
                Answer: {joke.punchline}
              </Text>
            </View>
          ))}

        </ScrollView>

        <Button
          title='Say Hello'
          onPress={() => Alert.alert(
            'Say Hello',
            'Say Hello',
          )}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#03A9F4'
  },
  joke: {
    margin: 10,
  },
  jokeSetup: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    margin: 10,
  },
  jokePunchLine: {
    color: 'black',
    fontSize: 12,
    margin: 10,
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    height: '70%',
  },
}

const mapStateToProps = state => ({
  jokes: state.jokes
})

const mapDispatchToProps = dispatch => ({
  fetchJokes: () => dispatch(fetchJokes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Jokes)