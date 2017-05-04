import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Alert, Button } from 'react-native'

export default class Link extends React.Component {

  handleClick = () => {
    const { url } = this.props

    if(url === '') {
      return Alert.alert(
        'Error',
        'Something Wrong Happened...')
    }

    return Linking.canOpenURL(url).then(supported => {
      supported ? Linking.openURL(url) : Alert.alert(
        'Error',
        'Something Wrong Happened...')
    }).catch(() => {
      Alert.alert(
        'Error',
        'Something Wrong Happened...')
    })
  }

  render() {
    return (
      <Button title="My Github Page"
        onPress={this.handleClick}
      />
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired
}