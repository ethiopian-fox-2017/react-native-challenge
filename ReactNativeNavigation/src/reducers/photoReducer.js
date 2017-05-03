import * as ActionTypes from '../actions/actionTypes';

const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTO_SUCCESS : return action.payload;
    default: return state;

  }
}

export default photoReducer;
