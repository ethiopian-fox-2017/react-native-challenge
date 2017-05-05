import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import Item from '../components/Item';


it('render and match to snapshot', () => {
  const dummyItem = {
    image_url: ''
  }
  const navigation = {
    navigate: function(name){

    }
  }
  const tree = renderer.create(
      <Item item={dummyItem} navigation={navigation}/>
  )
  expect(tree).toMatchSnapshot();
})
