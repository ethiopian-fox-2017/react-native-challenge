import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { getPhotos } from './index';
import { GET_PHOTOS } from './constants';

const mockStore = configureMockStore([thunk]);

describe('photo actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('fetching photos success', () => {
    const store = mockStore();
    fetchMock.get('https://api.500px.com/v1/photos?feature=popular&page=1&image_size=4&consumer_key=nZT1LihsmtDLDlYeWEjrESFuig31HopicF2i6iV0', { photos: ['nikmat'] });
    return store.dispatch(getPhotos())
    .then(() => {
      expect(store.getActions()).toEqual([
        {
          payload: ['nikmat'] ,
          type: GET_PHOTOS
        }
      ])
    })
  })

  // it('handle success request', () => {
  //   const store = mockStore();
  //   fetchMock.get('http://localhost:1234/photos', { photos: ['google']});
  //   return store.dispatch(getPhotosSuccess())
  //   .then(() => {
  //     expect(store.getActions()).toEqual([
  //       { payload: { photos: ['google'] }, type: GET_PHOTOS },
  //     ]);
  //   });
  // });

})
