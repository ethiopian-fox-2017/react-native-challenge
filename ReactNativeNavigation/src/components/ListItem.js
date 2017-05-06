import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  RefreshControl
} from 'react-native';
import {
  Spinner,
  Container
} from 'native-base';

import Item from './Item';
import FooterMenu from './FooterMenu';
import { fetchPhoto } from '../actions';

class ListItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      refreshing: false
    }
  }

  static navigationOptions = { title: 'Hello Photographer', };

  componentDidMount(){
    this.props.fetchPhoto();
  }

  afterRefresh(){
    this.setState({refreshing: false})
    this.props.fetchPhoto();
  }

  _onRefresh(){
    this.setState({refreshing: true});
    this.afterRefresh();
  }

  render() {
    const { photos } = this.props;
    return (
      <View style={styles.container}>

      <StatusBar backgroundColor="#3F51B5"
        barStyle="light-content" />

      <Container>
        <Text style={styles.welcome}>
          Photography
        </Text>
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

        { photos.data.map(item => {
          // console.log(item);
          return (
          <Item key={item.id} item={item}
            navigation = {this.props.navigation}
          />
          )

        })
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    fetchPhoto: () => dispatch(fetchPhoto())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
