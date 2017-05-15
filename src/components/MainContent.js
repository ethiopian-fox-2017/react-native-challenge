import React from 'react'
import {ScrollView, ListView} from 'react-native'
import { Container,View, Content, Card, CardItem, Left, Body,Thumbnail, Text, Button, Icon, Image } from 'native-base'
import { styles } from '../config/'

import Spinner from 'react-native-loading-spinner-overlay';
import NavigationContent from './NavigationContent.js'
import ItemContent from './ItemContent'
import {connect } from 'react-redux'
import {fetchRestaurant} from '../actions'


class MainContent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      foods : [
        {id : 0, nama : 'nasi goreng'},
        {id : 1, nama : 'nasi padang'},
      ],
      restaurants : [],
      ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
    console.log('constructor');

  }

  componentDidMount(){
    console.log('jalan');
    this.props.fetchRestaurant()
  }

  setData(response){
    this.setState({
      restaurants : response.data.restaurants
    })
    console.log('responsnya',response.data.restaurants);
  }
  render(){
    return (
      <ScrollView>
      {this.props.restaurants.length === 0 && (
        <View style={{ flex: 1 }}>
       <Spinner visible={true} textContent={"Mohon Bersabar ..."} textStyle={{color: '#FFF'}} />
        </View>
        )
      }
      <NavigationContent />

      <ListView
        ref="ListView"
        dataSource={this.state.ds.cloneWithRows(this.props.restaurants)}
        renderRow={(rowData) => <ItemContent navigation={this.props.navigation} restaurant={rowData.restaurant}/>}
        />
      </ScrollView>


    )
  }
}
const mapStateToProps = (state) => ({
  restaurants : state.restaurants
})


const mapDispatchToProps = (dispatch) => ({
  fetchRestaurant : () => dispatch(fetchRestaurant())
})
export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
