import photoReducer from './photoReducers';
import { GET_PHOTOS } from '../actions/constants';

describe('photo reducer', () => {
  test('should return the initial state', () => {
    expect(
      photoReducer(undefined, {})
    ).toEqual([])
  })

  test('should return the something state', () => {
    const expectedAction = {
      type: GET_PHOTOS,
      payload: {name:'john'},
    }
    expect(
      photoReducer(undefined, expectedAction)
    ).toEqual({name: 'john'})
  })
})
