import 'react-native';
import React from 'react';
import ListPhoto from '../src/components/ListPhoto';
import { shallow } from 'enzyme';
// Note: test renderer must be required after react-native.


test('renders correctly', () => {
  const data = {
    user: '',
    userpic_url: '',
  }
  const tree = shallow(
      <ListPhoto photo={data} />
  );

  expect(tree).toMatchSnapshot();
});
