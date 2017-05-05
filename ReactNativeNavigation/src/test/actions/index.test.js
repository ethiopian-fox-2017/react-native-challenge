import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import * as ActionTypes from '../../actions/actionTypes';
import { fetchPhoto, fetchPhotoRequest, fetchPhotoFailure, fetchPhotoSuccess, deleteDataSuccess  } from '../../actions';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions for photos', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_PHOTO_SUCCESS when fetching photos has been done', () => {
    nock('http://example.com/')
      .get('/photos')
      .reply(200, { payload: []})

    const expectedActions = [
      { type: ActionTypes.FETCH_PHOTO_REQUEST },
      { type: ActionTypes.FETCH_PHOTO_SUCCESS, payload: [] }
    ]
    const store = mockStore({ photos: [] })

    return store.dispatch(fetchPhoto())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

// describe('actions creator for password', () => {
//   it('fetch data success action creator works', () => {
//     const mockData = [];
//     const expected = {
//       type: ActionTypes.FETCH_DATA_SUCCESS,
//       payload: mockData
//     };
//     expect(fetchDataSuccess(mockData)).toEqual(expected);
//   });
//   it('add data success action creator works', () => {
//     const mockData = {
//       "id": 2,
//       "url": "http://google.com/",
//       "username": "johno",
//       "password": "Doe9!3",
//       "createdAt": "2017-04-02",
//       "updatedAt": "2017-04-02"
//     };
//     const expected = {
//       type: ActionTypes.ADD_DATA_SUCCESS,
//       payload: mockData
//     };
//     expect(addDataSuccess(mockData)).toEqual(expected);
//   });
// });
