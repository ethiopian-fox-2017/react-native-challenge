import React from 'react'
import { connect } from 'react-redux';

import { fetchData } from '../actions/nativeActionsCreator';

import {
  View,
  Text,
  StyleSheet
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
      <View style = {styles.content}>

        { this.props.datas.map((data, index) => (
          <Text style = {{ fontSize: 15}} key={index}>
            { data.name }
          </Text>
        )) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '80%',
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
