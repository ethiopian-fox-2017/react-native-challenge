import { combineReducers } from 'redux'

import restaurantReducer from './RestaurantReducers'
import bookingReducer from './BookingReducers'

const rootReducer = combineReducers({
  restaurants : restaurantReducer,
  bookings : bookingReducer
})

export default rootReducer
