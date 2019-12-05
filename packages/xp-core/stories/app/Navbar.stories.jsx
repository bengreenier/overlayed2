import React from 'react'
import { Navbar } from '../../comp/app/Navbar'

import { object } from '@storybook/addon-knobs'

export default {
  title: 'app.Navbar',
  component: Navbar,
}

/**
 * A default navbar
 * Only supports testing a single link, due to knob limitations
 */
export const Default = () => (
  <Navbar links={[object('link', { label: 'Test', href: '#' })]} />
)
