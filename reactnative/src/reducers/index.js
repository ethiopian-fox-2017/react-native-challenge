import { combineReducers } from 'redux';

import { spotifyReducer } from './spotifyReducer';

const rootReducer = combineReducers({
  datas : spotifyReducer,
})

export default rootReducer;
