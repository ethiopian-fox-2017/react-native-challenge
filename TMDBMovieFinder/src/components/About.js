import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text
} from 'react-native'

import { styles } from '../styles'

export default class About extends React.Component {

  static navOpt = () => ({
    title: 'About'
  })

  render () {
    return (
      <View style={styles.itemBox}>
        <Text>Welcome to About Page</Text>
      </View>
    )
  }
}

About.propTypes = {
  navigation: PropTypes.object.isRequired
}