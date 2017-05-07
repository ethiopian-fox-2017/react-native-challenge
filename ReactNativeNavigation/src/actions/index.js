import axios from 'axios';

import * as ActionTypes from './actionTypes';

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
  const config = '&consumer_key=hQd0d4vI0T6IWipTwhovQ0fTRWyJzdJxGF4uE6QS';
  return dispatch => {
    dispatch(fetchPhotoRequest())
    return axios.get(`https://api.500px.com/v1/photos?feature=popular&page=${rdm}&image_size[]=200&image_size[]=600${config}`)
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
