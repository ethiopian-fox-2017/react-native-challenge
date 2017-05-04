import 'react-native';
import React from 'react';
import Button from '../src/components/Button';
import { shallow } from 'enzyme';
// Note: test renderer must be required after react-native.


test('renders correctly', () => {
  const tree = shallow(
    <Button />
  );
  expect(tree).toMatchSnapshot();
});
