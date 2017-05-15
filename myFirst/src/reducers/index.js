import { combineReducers } from 'redux';

import photoReducers from './photoReducers';

const rootReducer = combineReducers({
  photos: photoReducers,
})

export default rootReducer;
