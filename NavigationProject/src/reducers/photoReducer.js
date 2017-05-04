import { FETCH_PHOTO_SUCCESS } from '../actions/constants'
const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTO_SUCCESS: return action.payload;
    default: return state;
  }
}

export default photoReducer;
