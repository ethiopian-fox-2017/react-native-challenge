import axios from 'axios'
import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ActivityIndicator,
  ListView,
  Image
} from 'react-native'

import Toolbar from './Toolbar'
import { styles } from '../styles'
import secret from '../../env'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      imgUrl: 'https://image.tmdb.org/t/p/w185'
    }
  }

  static navigationOptions = {
    title: 'Main'
  }

  getData() {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${secret.TMDB_API}`)
      .then(res => {
        this.setState({
          dataSource: ds.cloneWithRows(res.data.results)
        })
      })
  }

  renderItems(data) {
    const { imgUrl } = this.state
    return (
      <View style={styles.itemBox}>
        <Text>{data.title}</Text>
        <Image source={{uri: imgUrl+data.poster_path}} style={{width: 185, height: 275}} />
      </View>
    )
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { dataSource } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Toolbar navigate={navigate} />
        { dataSource.length <= 0 ?
          <View>
            <ActivityIndicator
              animating={true}
              style={styles.loadingIcon}
              size="large" />
            <Text style={styles.headerText}>Fetching data...</Text>
          </View>
          :
          <ListView
            dataSource={dataSource}
            renderRow={(rowData) => this.renderItems(rowData)}
            style={{width: '100%'}}
          />
        }
      </View>
    )
  }
}

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}