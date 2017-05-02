import axios from 'axios'
import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Navbar from './Navbar'
import { styles } from '../styles'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  getData = () => {
    axios.get(``)
  }

  componentDidMount() {

  }

  render() {
    // const imgUrl = 'https://image.tmdb.org/t/p/w185'
    return (
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.headerText}>Test</Text>
      </View>
    )
  }
}