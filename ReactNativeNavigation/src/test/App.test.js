import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import ListItem from '../components/ListItem';


// it('render without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// })

it('render and match to snapshot', () => {
  const tree = renderer.create(<App />)
  expect(tree).toMatchSnapshot();
})
