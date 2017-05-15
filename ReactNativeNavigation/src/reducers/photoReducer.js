import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  data: [],
  isFetching: false,
  error: ''
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTO_REQUEST : return {
        ...state,
        data: [],
        isFetching: true,
        error: ''
      }
    case ActionTypes.FETCH_PHOTO_FAILURE : return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ActionTypes.FETCH_PHOTO_SUCCESS : return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    default: return state;

  }
}

export default photoReducer;
