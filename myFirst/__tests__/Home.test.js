import 'react-native';
import React from 'react';
import Home from '../src/components/Home';
import { shallow } from 'enzyme';
// Note: test renderer must be required after react-native.


test('renders correctly', () => {
  const tree = shallow(<Home />);
  expect(tree).toMatchSnapshot();
});
