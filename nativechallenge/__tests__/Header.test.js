import 'react-native';
import React from 'react';
import Header from '../src/components/Header.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Header />
  );
  expect(tree).toMatchSnapshot()
});
