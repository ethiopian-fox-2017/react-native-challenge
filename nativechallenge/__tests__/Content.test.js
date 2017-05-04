import 'react-native';
import React from 'react';
import Content from '../src/components/Content.js';
import { Provider } from 'react-redux';
import store from '../src/store';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  expect(tree).toMatchSnapshot()
});
