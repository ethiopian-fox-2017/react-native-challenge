import 'react-native'
import React from 'react'

import Toolbar from '../src/components/Toolbar'
import renderer from 'react-test-renderer'

it('Render Toolbar', () => {
  const wrapper = renderer.create(
    <Toolbar />
  ).toJSON()
  expect(wrapper).toMatchSnapshot()
})