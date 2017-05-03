import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '10%',
    backgroundColor: '#80CBC4',
    justifyContent: 'center',
    borderTopWidth: 1
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnFooter: {
    width: '20%',
    backgroundColor: 'blue',
  }
});

const Footer = () => {
  return (
    <View style = {styles.footer}>

      <View style = {styles.footerContainer}>
        <Button
          onPress={() => {}}
          title="Home"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
          style = {styles.btnFooter }
        />
        <Button
          onPress={() => {}}
          title="About"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
          style = {styles.btnFooter }
        />
        <Button
          onPress={() => {}}
          title="Chat"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
          style = {styles.btnFooter }
        />
        <Button
          onPress={() => {}}
          title="Profile"
          color="#000"
          accessibilityLabel="Learn more about this purple button"
          style = {styles.btnFooter }
        />
      </View>

    </View>
  )

}

export default Footer;
