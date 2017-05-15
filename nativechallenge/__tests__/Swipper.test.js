import 'react-native';
import React from 'react';
import Swipper from '../src/components/Swipper.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Swipper />
  );
  expect(tree).toMatchSnapshot()
});
