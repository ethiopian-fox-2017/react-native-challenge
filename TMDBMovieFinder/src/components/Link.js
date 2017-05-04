import React from 'react'
import PropTypes from 'prop-types'
import { Linking, Alert, Button } from 'react-native'

export default class Link extends React.Component {
  render() {
    const { url } = this.props
    return (
      <Button title="My Github Page"
        onPress={() => {
          Linking.openURL(url).catch(() => Alert.alert(
            'Error',
            'Something wrong...'
          ))
        }}
      />
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired
}