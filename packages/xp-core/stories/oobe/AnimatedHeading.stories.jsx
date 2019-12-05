import React from 'react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { AnimatedHeading } from '../../comp/oobe/AnimatedHeading'

export default {
  title: 'Oobe.AnimatedHeading',
  component: AnimatedHeading,
}

export const Default = () => (
  <AnimatedHeading
    text={text('content', 'Example heading')}
    onComplete={action('complete')}
  />
)
