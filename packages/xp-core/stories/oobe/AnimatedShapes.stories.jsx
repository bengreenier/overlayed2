import React from 'react'
import { action } from '@storybook/addon-actions'
import { AnimatedShapes } from '../../comp/oobe/AnimatedShapes'

export default {
  title: 'Oobe.AnimatedShapes',
  component: AnimatedShapes,
}

export const Default = () => <AnimatedShapes onComplete={action('complete')} />
