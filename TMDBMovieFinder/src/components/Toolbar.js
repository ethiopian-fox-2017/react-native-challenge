import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import { styles } from '../styles'

export default class Toolbar extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.toolbar}>
        <Text style={styles.textTitle}>Movie Finder</Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('About', {name: 'About'})}
          underlayColor="rgba(255,255,255,0.5)"
        >
          <Text style={styles.textTitle}>About</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Toolbar.propTypes = {
  navigation: PropTypes.object.isRequired
}