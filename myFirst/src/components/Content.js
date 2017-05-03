import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ListView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

import ListPhoto from './ListPhoto';
import styles from '../assets';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state ={
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  scrollToTop() {
    this.ref.ListView.scrollTo(0)
  }

  render() {
    const { photos } = this.props;
    
    return (
      <View>
        { photos.length > 0 ?
          <View>
            <ListView
              ref="ListView"
              dataSource={this.state.ds.cloneWithRows(this.props.photos)}
              renderRow={(rowData) => <ListPhoto photo={rowData}/> }
            />
            <View style={styles.buttonGroup}>

            </View>
          </View>

          :
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        }

      </View>

    )
  }
}

const dispatchToProps = dispatch => ({
  getPhotos: () => dispatch(getPhotos()),
})

const stateToProps = state => ({
  photos: state.photos,
})

export default connect(stateToProps,dispatchToProps)(Content);
