import { combineReducers } from 'redux';

import soundtrackReducer from './soundtrackReducer';

const rootReducer = combineReducers({
  mySoundtrack: soundtrackReducer,
});

export default rootReducer;
