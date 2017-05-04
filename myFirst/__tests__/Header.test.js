import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';
// Note: test renderer must be required after react-native.


test('renders correctly', () => {
  const tree = shallow(
      <Header />
  );

  expect(tree).toMatchSnapshot();
});
