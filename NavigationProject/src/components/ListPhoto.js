import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  ScrollView,
  ListView,
  Image
} from 'react-native';

import { Col, Grid } from 'native-base';

import PhotoItem from './PhotoItem'
import { fetchPhoto } from '../actions'

class ListPhoto extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = { title : '700px'}

  componentDidMount() {
    this.props.fetchPhoto()
  }

  render () {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.content}>
      <Grid>
        <Col style={{alignItems:'center'}}>
          <Image
              style={{width:80, height: 80, borderRadius: 100, margin: 10}}
              source={{uri:'https://avatars0.githubusercontent.com/u/25143119?v=3&u=23b4af0333afa56e2575ed1b72ea469fa733108c&s=400'}}
          />
        </Col>
        <Col style={{alignItems:'center', marginTop: 20}}>
          <Text style={styles.stats}>1234</Text>
          <Text style={{marginLeft:10}}>posts</Text>
        </Col>
        <Col style={{alignItems:'center', marginTop: 20}}>
          <Text style={styles.stats}>999</Text>
          <Text style={{marginLeft:10}}>followers</Text>
        </Col>
        <Col style={{alignItems:'center',  marginTop: 20}}>
          <Text style={styles.stats}>888</Text>
          <Text style={{marginLeft:10}}>following</Text>
        </Col>
      </Grid>
      <View>
        <Text style={{marginLeft: 10, color:'black', fontWeight:'bold'}}>Laksono Suryadi</Text>
        <Text style={{marginLeft: 10, color:'black', marginBottom:4}}>A photography enthusiast</Text>
        <Text style={{marginLeft: 10, marginBottom: 20, fontSize:12}}>Followed by<Text style={{fontWeight:'bold', color:'black'}}> Anthony Juan, Andra Satria, + 10 more</Text></Text>
      </View>
        {this.props.photos.length === 0 && <Text style={styles.loading}>LOADING</Text>}
        <View style={styles.grid}>
            {
              this.props.photos.map(photo => (
                <PhotoItem key={photo.id} photo={photo} navigation={this.props.navigation} />
                )
              )
            }
        </View>
      </ScrollView>
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  grid: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  loading: {
    marginTop: 100,
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  stats: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
}


const mapStateToProps = (state) => ({
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  fetchPhoto: () => dispatch(fetchPhoto()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListPhoto);
