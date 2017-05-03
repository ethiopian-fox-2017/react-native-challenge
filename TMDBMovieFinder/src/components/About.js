import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Button
} from 'react-native'

import { styles } from '../styles'

export default class About extends React.Component {

  static navigationOptions = () => ({
    title: 'About'
  })

  render () {
    return (
      <View style={styles.aboutBox}>
        <Text>Welcome to About Page</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }
}

About.propTypes = {
  navigation: PropTypes.object.isRequired
}