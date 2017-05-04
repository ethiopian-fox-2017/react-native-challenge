import 'react-native'
import React from 'react'

import About from '../src/components/About'
import renderer from 'react-test-renderer'

it('Render About', () => {
  const wrapper = renderer.create(
    <About />
  )
  expect(wrapper).toMatchSnapshot()
})