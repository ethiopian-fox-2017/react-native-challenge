import { combineReducers } from 'redux';

import WeatherReducer from './weatherReducer';

const RootReducer = combineReducers({
  weathers: WeatherReducer
});

export default RootReducer;
