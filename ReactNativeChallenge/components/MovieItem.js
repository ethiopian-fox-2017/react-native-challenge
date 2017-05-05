import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const MovieItem = (props) => {
  return(
    <View style={styles.content}>
      <Text>Episode : {props.movieDetails.episode_id}</Text>
      <Text>Title : {props.movieDetails.title}</Text>
      <Text>Director : {props.movieDetails.director}</Text>
      <Text>Release Date : {props.movieDetails.release_date}</Text>
    </View>
  )
}

const styles = {
  content: {
    padding: 20
  }
}

export default MovieItem
