import axios from 'axios';

import * as ActionTypes from './actionTypes';
import Config from 'react-native-config';

function fetchPhotoRequest() {
  return {
    type: ActionTypes.FETCH_PHOTO_REQUEST
  }
}


function fetchPhotoFailure(error) {
  return {
    type: ActionTypes.FETCH_PHOTO_FAILURE,
    error
  }
}

const fetchPhotoSuccess = (photos) => {
  return {
    type: ActionTypes.FETCH_PHOTO_SUCCESS,
    payload: photos
  }
}

export const fetchPhoto = (cb) => {
  const rdm = (Math.floor(Math.random()*500)+1);
  return dispatch => {
    dispatch(fetchPhotoRequest())
    return axios.get(`https://api.500px.com/v1/photos?feature=popular&page=${rdm}&image_size[]=200&image_size[]=600&consumer_key=${Config.PX_KEY}`)
    .then(res => {
    cb(res.data.photos);
      return dispatch(fetchPhotoSuccess(res.data.photos));
    })
    .catch(error => {
      cb({error: error})
      return dispatch(fetchPhotoFailure(error))
    })
  }
}
