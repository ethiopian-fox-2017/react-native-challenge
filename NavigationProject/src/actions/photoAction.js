import axios from 'axios';
import { FETCH_PHOTO_SUCCESS } from './constants'

export const fetchPhotoSuccess = (photos) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: photos
})

export const fetchPhoto = () => {
  return (dispatch) => {
    fetch('https://api.500px.com/v1/photos?feature=pop&page=1&image_size=600&consumer_key=0zqsxtvn1mA4DSgF6MUjmuAqHpSh1BUO3sYeKElF')
    .then(res => res.json())
    .then(data => dispatch(fetchPhotoSuccess(data.photos)));
  }
}
