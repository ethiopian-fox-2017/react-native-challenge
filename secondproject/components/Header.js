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


// http://api.openweathermap.org/data/2.5/forecast?id=1642911&APPID=cd94b7c5d853fa3ef851259ac1d3347b
// {
//   "id": 1642911,
//   "name": "Jakarta",
//   "country": "ID",
//   "coord": {
//     "lon": 106.845131,
//     "lat": -6.21462
//   }
// },

export default Header