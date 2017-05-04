import { FETCH_WEATHER, SEARCH_CITY } from '../actions/constans';

const initialState = [];

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER : {
      const newstate = action.payload;
      console.log(newstate);
      return newstate;
    }
    default:return state;
  }
};

export default WeatherReducer
