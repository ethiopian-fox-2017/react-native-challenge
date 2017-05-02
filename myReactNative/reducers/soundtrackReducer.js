import { ADD_SOUNDTRACK } from '../actions/constant';

const initialState = [];

const addSoundtrack = (state, soundtrack) => {
  const newState = soundtrack;
  return newState;
};

const soundtrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SOUNDTRACK: return addSoundtrack(state, action.payload);
    default: return state;
  }
};

export default soundtrackReducer;
