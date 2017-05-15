import 'react-native';
import React from 'react';
import Profile from '../src/components/Profile.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Profile />
  );
  expect(tree).toMatchSnapshot()
});
