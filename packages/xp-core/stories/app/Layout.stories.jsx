import React from 'react'
import { Layout } from '../../comp/app/Layout'
import { Paragraph } from 'grommet'

export default {
  title: 'app.Layout',
  component: Layout,
}

const View = () => (
  <Paragraph>Hello world, I am inside the view portion of the page.</Paragraph>
)

const Edit = () => <Paragraph>Hi there - This is the edit portion of the page.</Paragraph>

/**
 * A default layout
 */
export const Default = () => <Layout view={() => <View />} edit={() => <Edit />} />
