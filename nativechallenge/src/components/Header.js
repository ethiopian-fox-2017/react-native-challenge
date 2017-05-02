import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Header = ({ name }) => {

  return (
    <View style = {styles.navbar}>
      <Text style={{textAlign: 'center', paddingTop: 20, color: '#fff', fontSize: 22}}>
        { name }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '10%',
    backgroundColor: '#2196F3'
  }
});



export default Header;
