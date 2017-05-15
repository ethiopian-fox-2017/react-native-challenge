import { GET_DATAS } from '../actions/constants';


export const spotifyReducer = (state = [], action) => {
  switch(action.type) {
    case GET_DATAS: {
      return action.payload
    }
    default: return state;
  }
}
