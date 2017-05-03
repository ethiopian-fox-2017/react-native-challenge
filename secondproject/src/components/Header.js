import React from 'react'

import {
  Text,
  View
} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome to React Native!
      </Text>
    </View>
  )
}

const styles = {
  container: {
    backgroundColor: '#03A9F4'
  },
  header: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
}

export default Header