import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ListItem from '../components/ListItem';
import store from '../store';


it('render and match to snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <ListItem />
    </Provider>
  )
  expect(tree).toMatchSnapshot();
})
