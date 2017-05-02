import { ADD_SOUNDTRACK } from './constant';

export const fetchDataSucceed = data => ({
  type: ADD_SOUNDTRACK,
  payload: data.tracks,
});

export const fetchData = () => {
  return (dispatch) => {
    fetch('https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR/top-tracks?country=SE')
    .then(res => res.json())
    .then(data => dispatch(fetchDataSucceed(data)));
  };
};
