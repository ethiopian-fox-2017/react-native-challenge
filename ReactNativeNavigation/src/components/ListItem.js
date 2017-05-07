import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  RefreshControl,
  ListView,
} from 'react-native';
import {
  Spinner,
  Container,
  Button,
  Icon
} from 'native-base';

import Item from './Item';
import ItemLV from './ItemLV';
import FooterMenu from './FooterMenu';
import { fetchPhoto } from '../actions';

class ListItem extends React.Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      refreshing: false,
      isListView: false,
      dsListView: ds.cloneWithRows([])
    }

    this.changeGrid = this.changeGrid.bind(this);
    this.setDataSourceList = this.setDataSourceList.bind(this);
  }

  static navigationOptions = { title: 'Hello Photographer', };

  componentDidMount(){
    this.props.fetchPhoto(this.setDataSourceList);
  }

  afterRefresh(){
    this.setState({refreshing: false})
    this.props.fetchPhoto(this.setDataSourceList);
  }

  _onRefresh(){
    this.setState({refreshing: true});
    this.afterRefresh();
  }

  changeGrid(){
    this.setState({isListView: !this.state.isListView});
  }

  setDataSourceList(data){
    if(data.error){
      console.log('Error: ',data.error);
    } else {
      const dsa = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.setState({dsListView: dsa.cloneWithRows(data)});
    }
  }

  render() {
    const { photos } = this.props;
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3F51B5"
        barStyle="light-content" />

      <Container>
      <View style={styles.titleStyle}>
        <Text style={styles.welcome}>
          Photography
        </Text>
        <Button style={styles.viewButtonStyle}
          onPress={this.changeGrid}>
          <Icon name="apps" />
        </Button>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
              />
          }
        >
        <View style={styles.viewStyle}>
      {photos.isFetching && <Spinner color='pink'/>}

        <Text style={styles.errorStyle}>{photos.error}</Text>

        {this.state.isListView ? (
          <View >
        <ListView dataSource={this.state.dsListView}
        renderRow={(rowData) =>
          <ItemLV key={rowData.id} item={rowData}
            navigation = {this.props.navigation}
          />} />
          </View>
        )
        : (
          <View style={styles.viewStyle}>
         {photos.data.map(item => {
          // console.log(item);
          return (
          <Item key={item.id} item={item}
            navigation = {this.props.navigation}
          />
          )
        })}
        </View>
      )
        }

        </View>
        </ScrollView>

        <FooterMenu navigation = {this.props.navigation}/>
      </Container>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  viewButtonStyle: {
    alignSelf: 'flex-end'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  errorStyle: {
    color: '#D8000C',
    backgroundColor: '#FFBABA'
  }
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: (cb) => dispatch(fetchPhoto(cb))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
