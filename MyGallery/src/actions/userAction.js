import { FETCH_USER_DATA } from './constant'

export const fetchingUserSucceed = (users) => {
  return {
    type: FETCH_USER_DATA,
    payload: users
  }
}

export const fetchingUser = () => {
  return (dispatch) => {
    fetch('http://e609ac71.ngrok.io/users')
    .then(res => res.json())
    .then(users => dispatch(fetchingUserSucceed(users)))
  };
};
