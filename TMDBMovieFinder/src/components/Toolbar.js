import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from '../styles'

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Image source={require('../img/tmdb.png')} style={styles.logoTMDB} />
        <Text style={styles.textTitle}>Movie Finder</Text>
      </View>
    )
  }
}