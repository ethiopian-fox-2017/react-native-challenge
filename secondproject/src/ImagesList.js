import React from 'react'
import _ from 'lodash'

import {
  Text,
  View,
  Image,
  Button,
  ListView,
} from 'react-native'

class ImagesList extends React.Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const listData = _.range(1,10)
    this.state = {
      dataSource: ds.cloneWithRows(listData)
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData =>(
            <View
              style={styles.gallery}
            >
              <Image
                style={styles.galleryImage}
                source={{uri: 'https://unsplash.it/300/200?image=1067'}}
              />
              <Text
                style={styles.galleryDesc}
              >
                Description
              </Text>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'teal',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },
  gallery: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  galleryImage: {
    width: 300,
    height: 200,
  },
  galleryDesc: {
    padding: 15,
  }
}

export default ImagesList