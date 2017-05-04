import 'react-native'
import React from 'react'

import Main from '../src/components'
import renderer from 'react-test-renderer'

it('Render Main Page', () => {
  const wrapper = renderer.create(
    <Main />
  ).toJSON()
  expect(wrapper).toMatchSnapshot()
})