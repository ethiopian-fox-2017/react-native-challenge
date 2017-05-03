import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  Button
} from 'react-native'

import Link from './Link'
import { styles } from '../styles'

export default class About extends React.Component {

  render () {
    return (
      <View style={styles.aboutBox}>
        <Image source={require('../img/tmdb1.png')} style={styles.logoTMDB} />
        <Text style={styles.aboutText}>A simple Movie Finder App powered by The Movie Database API to get the latest movie</Text>
        <View>
          <Link url={'https://github.com/andrasat'}/>
        </View>
        <Button
          title="Go Back"
          color="#01d277"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }
}

About.propTypes = {
  navigation: PropTypes.object.isRequired
}