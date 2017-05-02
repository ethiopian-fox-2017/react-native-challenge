import axios from 'axios';

import { GET_DATAS }  from './constants.js';

export const fetchData = () => dispatch => {
  // let url = 'https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums';
  axios.get('https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/albums')
    .then(res =>  dispatch(getDatas(res.data.items)))
    .catch(err => { console.log(err)})
}

export const getDatas = datas => ({
    type: GET_DATAS,
    payload: datas
})
