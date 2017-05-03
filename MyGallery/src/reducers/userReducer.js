import FETCH_USER_DATA from '../actions/constant'

const initialState = []

const userDataFetching = (state, action) => {
  const users = action.payload
  return users
}

const userReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_USER_DATA: return userDataFetching(state, action)
    default : return state
  }
}

export default userReducer;
