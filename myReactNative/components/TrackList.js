import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

import { fetchData } from '../actions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'yellow',
  },
  list: {
    alignSelf: 'center',
  },
  trackImage: {
    width: 300,
    height: 300,
  },
});

export class TrackList extends React.Component {

  componentDidMount() {
    this.props.fetchTrack();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.props.trackList.map(track => (
          <View key={track.id} style={styles.list}>
            <Text>{track.name}</Text>
            <Image
              source={{ uri: track.album.images[1].url }}
              style={styles.trackImage}
            />
            <Text>{track.id}</Text>
          </View>
        )) }
      </ScrollView>
    );
  }
}


const mapStateToProps = state => ({
  trackList: state.mySoundtrack,
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
