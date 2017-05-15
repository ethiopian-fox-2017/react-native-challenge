import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import MainLogin from './components/MainLogin'
import store from './store'

class LoginContent extends React.Component {

    render() {
      return(
        <Provider store={store}>
          <MainLogin navigation={this.props.navigation}/>
        </Provider>
      )
    }
}

export default LoginContent
