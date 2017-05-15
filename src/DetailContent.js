import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import MainDetail from './components/MainDetail'
import store from './store'

class DetailContent extends React.Component {

    render() {
      return(
        <Provider store={store}>
          <MainDetail navigation={this.props.navigation}/>
        </Provider>
      )
    }
}

export default DetailContent
