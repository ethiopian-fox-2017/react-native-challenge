import FETCH_USER_DATA from '../actions/constant'

export const fetchingUserSucceed = (users) => {
  return {
    type: FETCH_USER_DATA,
    payload: users
  }
}

export const fetchingUser = () => {
  return (dispatch) => [
    fetch('http://localhost:3004/users/')
    .then(res => res.json())
    .then(users => dispatch(fetchingUserSucceed(users)))
  ]
}
