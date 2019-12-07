import React from 'react'
import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { AnimatedQuote } from '../../comp/oobe/AnimatedQuote'

export default {
  title: 'Oobe.AnimatedQuote',
  component: AnimatedQuote,
}

export const Default = () => (
  <AnimatedQuote
    minLength={number('minLength', 10)}
    maxLength={number('maxLength', 100)}
    onComplete={action('complete')}
  />
)
