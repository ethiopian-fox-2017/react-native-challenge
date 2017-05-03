import axios from 'axios'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  ActivityIndicator,
  ListView,
  Image
} from 'react-native'
import { Container, Content, Card, CardItem, Left, Body, H2 } from 'native-base'

import Toolbar from './Toolbar'
import { styles } from '../styles'
import secret from '../../env'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      imgUrl: 'https://image.tmdb.org/t/p/w342'
    }
  }

  getData() {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    })

    axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-12-01&sort_by=popularity.desc&api_key=${secret.TMDB_API}`)
      .then(res => {
        this.setState({
          dataSource: ds.cloneWithRows(res.data.results)
        })
      })
  }

  renderItems(data) {
    const { imgUrl } = this.state
    return (
      <Card style={{flex:0}}>
        <CardItem>
          <Left>
            <H2>{data.title}</H2>
            <Body>
              <Text style={styles.scoreMovie}>{data.vote_average}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body style={{alignItems: 'center'}}>
            <Image source={{uri: imgUrl+data.poster_path}} style={{width: '75%', height: 450}} />
            <Text style={{padding:10}}>{data.overview}</Text>
          </Body>
        </CardItem>
      </Card>
    )
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { dataSource } = this.state
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Toolbar navigate={navigate} />
        { dataSource.length <= 0 ?
          <Content>
            <ActivityIndicator
              animating={true}
              style={styles.loadingIcon}
              size="large" />
            <Text style={styles.headerText}>Fetching data...</Text>
          </Content>
          :
          <Content>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) => this.renderItems(rowData)}
              style={{width: '100%'}}
            />
          </Content>
        }
      </Container>
    )
  }
}

Main.propTypes = {
  navigation: PropTypes.object.isRequired
}