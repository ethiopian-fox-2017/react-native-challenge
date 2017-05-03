import { GET_PHOTOS } from './constants';
import axios from 'axios';


export const getPhotosSuccess = value => ({
    type: GET_PHOTOS,
    payload: value,
  }
);

export const getPhotosFailed = value => ({
    type: GET_PHOTOS,
    payload: value,
  }
);

export const getPhotos = () => (
  dispatch => (
    axios.get('https://api.500px.com/v1/photos?feature=popular&page=1&image_size=3&consumer_key=nZT1LihsmtDLDlYeWEjrESFuig31HopicF2i6iV0')
         .then((res) => {
          //  console.log(res.data);
           dispatch(getPhotosSuccess(res.data.photos))
         })
         .catch((err) => {
           dispatch(getPhotosFailed(err.message))
         })
  )
)
