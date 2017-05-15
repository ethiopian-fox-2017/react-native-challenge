import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const Header = ({ name }) => {

  return (
    <View style = {styles.navbar}>
      <Button
        onPress={() => {}}
        style={styles.textBar}
        title="Back"
        color="#fff"
      />
      <Text style={styles.textBarTengah}>
        SpotifyApp
      </Text>
      <Button
        style={styles.textBar}
        title="Next"
        color="#fff"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    backgroundColor: '#2196F3',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textBar: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10
  },
  textBarTengah: {
    fontSize: 22,
    color: '#fff',
    alignItems: 'center'
  }
});



export default Header;
