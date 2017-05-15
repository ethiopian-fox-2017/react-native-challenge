import { GET_PHOTOS } from '../actions/constants';

const photoReducers = (state = [], action) => {
  switch (action.type) {
    case GET_PHOTOS: {
      return action.payload;
    }
    default: return state;

  }
}

export default photoReducers;
