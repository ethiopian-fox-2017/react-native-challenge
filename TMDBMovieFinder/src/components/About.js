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
    const { navigation } = this.props
    return (
      <View style={styles.aboutBox}>
        <Image source={require('../img/tmdb1.png')} style={styles.logoTMDB} />
        <Text style={styles.aboutText}>A simple Movie Finder App powered by The Movie Database API to get the latest movie</Text>
        <View>
          <Link url={'www'}/>
        </View>
        <Button
          title="Go Back"
          color="#01d277"
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }
}

About.propTypes = {
  navigation: PropTypes.object.isRequired
}