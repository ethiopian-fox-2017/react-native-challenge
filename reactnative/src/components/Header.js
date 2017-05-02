import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = ({ name }) => {

  return (
    <View style = {styles.navbar}>
      <Text style={{textAlign: 'center', marginTop: 10, color: '#fff', fontSize: 22}}>
        { name }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '10%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }
});



export default Header;
