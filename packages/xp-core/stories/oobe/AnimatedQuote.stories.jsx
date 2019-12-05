import React from 'react'
import { action } from '@storybook/addon-actions'
import { AnimatedQuote } from '../../comp/oobe/AnimatedQuote'

export default {
  title: 'Oobe.AnimatedQuote',
  component: AnimatedQuote,
}

export const Default = () => <AnimatedQuote onComplete={action('complete')} />
