import 'react-native';
import React from 'react';
import Content from '../src/components/Content';
import { shallow } from 'enzyme';
// Note: test renderer must be required after react-native.
import { Provider } from 'react-redux';
import store from '../src/store/';

test('renders correctly', () => {
  const tree = shallow(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  expect(tree).toMatchSnapshot();
});
