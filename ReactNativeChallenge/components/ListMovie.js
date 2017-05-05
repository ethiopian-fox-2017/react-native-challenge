import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import MovieItem from './MovieItem'

const ListMovie = (props) => {
  return (
    <ScrollView style={styles.content}>
      {
        props.movieList.map(movie => (
          <MovieItem key={movie.episode_id} movieDetails={movie} />
          )
        )
      }
    </ScrollView>
  )
}

const styles = {
  content: {
    flex: 1,
    width: '100%',
    paddingLeft: '5%'
  }
}

export default ListMovie
