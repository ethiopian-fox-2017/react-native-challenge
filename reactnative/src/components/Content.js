import React from 'react'
import { connect } from 'react-redux';

import { fetchData } from '../actions/nativeActionsCreator';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';


class Content extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log('-----=====', this.props.datas);
    return (
      <ScrollView>

        <View style = {styles.content}>
          { this.props.datas.map((data, index) => (
            <View key={index}>
              <Text style = {{ fontSize: 15, alignSelf: 'center' }}>
                { index+1 }. { data.name }
              </Text>
              <Image
                source={{ uri: data.images[0].url }}
                style={{width: 400, height: 400}}
              />
            </View>
          )) }
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
    datas: state.datas
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
