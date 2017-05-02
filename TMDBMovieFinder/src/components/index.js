import axios from 'axios'
import React from 'react'
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native'

import Toolbar from './Toolbar'
import { styles } from '../styles'
import secret from '../../env'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      imgUrl: 'https://image.tmdb.org/t/p/w185'
    }
  }

  getData() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${secret.TMDB_API}`)
      .then(res => {
        this.setState({
          data: res.data.results
        })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { data } = this.state
    return (
      <View style={styles.container}>
        <Toolbar />
        { data.length <= 0 ?
          <View>
            <ActivityIndicator
              animating={true}
              style={styles.loadingIcon}
              size="large" />
            <Text style={styles.headerText}>Fetching data...</Text>
          </View>
          :
          data.map(each =>
            <View style={styles.itemBox} key={ each.id }>
              <Text style={styles.headerText}>{ each.title }</Text>
            </View>
          )
        }
      </View>
    )
  }
}