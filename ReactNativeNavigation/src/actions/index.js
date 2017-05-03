import axios from 'axios';

import * as ActionTypes from './actionTypes';

export const fetchPhotoSuccess = (photos) => {
  return {
    type: ActionTypes.FETCH_PHOTO_SUCCESS,
    payload: photos
  }
}

export const fetchPhoto = () => {
  var config = '&consumer_key=hQd0d4vI0T6IWipTwhovQ0fTRWyJzdJxGF4uE6QS';
  return (dispatch) => {
    axios.get(`https://api.500px.com/v1/photos?feature=popular&page=1&image_size[]=200&image_size[]=600${config}`)
    .then(res => dispatch(fetchPhotoSuccess(res.data.photos)))
    .catch(err => console.error(err))
  }
}
