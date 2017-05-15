import 'react-native';
import React from 'react';
import myFirst from '../index.android.js';
import { shallow } from 'enzyme';
// Note: test renderer must be required after react-native.


test('renders correctly', () => {
  const tree = shallow(
    <myFirst />
  );

  expect(tree).toMatchSnapshot();
});
