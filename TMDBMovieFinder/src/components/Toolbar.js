import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Image,
  Text,
  Button
} from 'react-native'

import { styles } from '../styles'

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Image source={require('../img/tmdb.png')} style={styles.logoTMDB} />
        <Text style={styles.textTitle}>Movie Finder</Text>
        <Button
          title="About"
          onPress={() => this.props.navigate('About', {name: 'About'})}
        />
      </View>
    )
  }
}

Toolbar.propTypes = {
  navigate: PropTypes.func.isRequired
}