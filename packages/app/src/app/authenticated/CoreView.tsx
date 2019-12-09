import React, { useState } from 'react'
import { Stack, Box, Keyboard, Anchor, Collapsible, Text } from 'grommet'
import Avatar from './chrome/Avatar'
import { useAuth } from '../context/Auth'
import GridView from './grid/GridView'
import { theme } from '../util/theme'
import GridResizerElement from './grid/elements/GridResizerElement'
import ClockElement from './grid/elements/ClockElement'
import GridAlignedBox from './grid/GridAlignedBox'
import Logo from './chrome/Logo'
import BasicRemoteElement from './grid/elements/BasicRemoteElement'
import WelcomeElement from './grid/elements/WelcomeElement'
import { useElements } from '../context/Element'

const isMenuToggle = (e: React.KeyboardEvent<HTMLElement>) => {
  return e.ctrlKey && !e.shiftKey
}

const isGridToggle = (e: React.KeyboardEvent<HTMLElement>) => {
  return e.ctrlKey && e.shiftKey
}

const CoreView: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showGrid, setShowGrid] = useState<boolean>(false)

  const { user } = useAuth()
  const { elements } = useElements()

  return (
    <Keyboard
      target="document"
      onSpace={e => {
        if (isMenuToggle(e)) setShowMenu(!showMenu)
        if (isGridToggle(e)) setShowGrid(!showGrid)
      }}
    >
      <Box height="100vh" background="dark-1">
        <GridView
          enabled={showGrid}
          initialSize={10}
          scaleBy={10}
          minScale={10}
          maxScale={100}
          color={theme.global.colors['dark-4'] as string}
        >
          {elements.map(e => {
            return <BasicRemoteElement key={e.name} uniqueName={e.name} url={e.url} />
          })}
          <WelcomeElement uniqueName="welcome-1" />
        </GridView>
      </Box>
      <Box fill="horizontal" style={{ position: 'absolute', top: 0 }}>
        <Collapsible open={showMenu}>
          <Stack fill={true} interactiveChild="first">
            <Box
              height="xxsmall"
              background="dark-3"
              direction="row-reverse"
              align="center"
              pad="small"
              gap="small"
            >
              <Avatar url={user.picture} />
              <Anchor href="#">Link</Anchor>
              <Anchor href="#">Link</Anchor>
              <Anchor href="#">Link</Anchor>
            </Box>
            <Box height="xxsmall" width="fit" direction="row" align="center" pad="small">
              <Logo />
            </Box>
          </Stack>
        </Collapsible>
      </Box>
    </Keyboard>
  )
}

export default CoreView
