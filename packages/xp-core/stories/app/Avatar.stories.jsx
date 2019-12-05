import React from 'react'
import { Avatar } from '../../comp/app/Avatar'

import { text } from '@storybook/addon-knobs'

export default {
  title: 'app.Avatar',
  component: Avatar,
}

export const Default = () => <Avatar email={text('email', 'ben@bengreenier.com')} />
