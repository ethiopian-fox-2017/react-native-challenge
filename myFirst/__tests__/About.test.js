import 'react-native';
import React from 'react';
import About from '../src/components/About';
import { shallow } from 'enzyme';
import { Button } from 'native-base';
import { Image } from 'react-native';
import { Linking } from 'react-native';
import sinon from 'sinon';
// Note: test renderer must be required after react-native.

describe('testing about page', () => {
  test('renders correctly', () => {
    const tree = shallow(
      <About />
    );

    expect(tree).toMatchSnapshot();
  });

  test('image github open link when pressed', () => {
    const onPress = sinon.spy()
    const wrapper = shallow(<About />).find('.buttonGit')
    wrapper.setProps({onPress: onPress});
    wrapper.simulate('press');
    expect(onPress.calledOnce).toEqual(true);
  })
})
