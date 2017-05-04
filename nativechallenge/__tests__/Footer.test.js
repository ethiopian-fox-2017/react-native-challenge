import 'react-native';
import React from 'react';
import Footer from '../src/components/Footer.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Footer />
  );
  expect(tree).toMatchSnapshot()
});
