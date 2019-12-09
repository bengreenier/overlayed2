import React from 'react'
import GridAlignedBox from '../GridAlignedBox'
import { Heading, Paragraph, List } from 'grommet'
import { useAuth } from '../../../context/Auth'
import { ElementComponentProps } from '../../../context/Element'

const hotkeyInfo = [
  { key: 'Ctrl+Space', desc: 'Show/Hide the menu' },
  { key: 'Ctrl+Shift+Space', desc: 'Show/Hide the grid' },
  { key: 'LMB', desc: 'Move overlay around the grid (when shown)' },
  { key: 'Ctrl+Shift+>', desc: 'Scale up the grid' },
  { key: 'Ctrl+Shift+<', desc: 'Scale down the grid' },
]

const WelcomeElement: React.FC<ElementComponentProps> = (
  props: ElementComponentProps
) => {
  const { user } = useAuth()

  return (
    <GridAlignedBox background="accent-1" pad="small" uniqueName={props.uniqueName}>
      <Heading level="1" size="smal">{`Welcome, ${user.name}.`}</Heading>
      <Paragraph>
        We're excited to have you onboard. Here's a few things you should know:
      </Paragraph>
      <List primaryKey="key" secondaryKey="desc" data={hotkeyInfo} />
    </GridAlignedBox>
  )
}

export default WelcomeElement
