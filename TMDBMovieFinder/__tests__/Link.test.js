import 'react-native'
import React from 'react'

import Link from '../src/components/Link'
import renderer from 'react-test-renderer'

it('Render Link to match snapshot', () => {
  const wrapper = renderer.create(
    <Link url={'https://github.com/andrasat'}/>
  ).toJSON()
  expect(wrapper).toMatchSnapshot()
})
