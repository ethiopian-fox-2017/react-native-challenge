import React from 'react'
import { Provider } from 'react-redux'
import BookingList from './components/BookingList'
import store from './store'

class BookingContent extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Provider store={store}>
        <BookingList />
      </Provider>
    )
  }
}


export default BookingContent
