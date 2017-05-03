import React from 'react'

import {
  Text,
  View,
  Button,
} from 'react-native'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is about
        </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'teal'
  }
}

export default About