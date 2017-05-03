import { combineReducers } from 'redux'

import jokeReducer from './jokeReducer'

const rootReducer = combineReducers({
  jokes: jokeReducer,
})

export default rootReducer