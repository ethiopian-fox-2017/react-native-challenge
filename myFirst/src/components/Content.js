import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

import ListPhoto from './ListPhoto';
import styles from '../assets';

class Content extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { photos } = this.props;
    return (
      <View>
      {
        photos.map(photo => (
          <ListPhoto key={photo.id} photo={photo}/>
        ))
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
