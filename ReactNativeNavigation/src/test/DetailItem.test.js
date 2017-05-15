import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import DetailItem from '../components/DetailItem';


it('render and match to snapshot', () => {
  const dummyItem = {
    id: 0,
    name: '',
    image_url: [],
    camera: '',
    lens: '',
    user:{
      firstname: '',
      lastname: ''
    }
  }
  const navigation = {
    state: {
      params : {
        item: dummyItem
      }
    }
  }
  const tree = renderer.create(
      <DetailItem navigation={navigation} />
  )
  expect(tree).toMatchSnapshot();
})
