import React, { useState } from 'react'
import { Stack, Box, Keyboard, Anchor, Collapsible, Text } from 'grommet'
import Avatar from './chrome/Avatar'
import { useAuth } from '../context/Auth'
import GridView from './grid/GridView'
import { theme } from '../util/theme'
import Logo from './chrome/Logo'
import BasicRemoteElement from './grid/elements/BasicRemoteElement'
import WelcomeElement from './grid/elements/WelcomeElement'
import { useElements } from '../context/Element'

/**
 * Checks if a space key event is the menu toggle event
 * @param e key event
 */
const isMenuToggle = (e: React.KeyboardEvent<HTMLElement>) => {
  return e.ctrlKey && !e.shiftKey
}

/**
 * Checks if a space key event is the grid toggle evnet
 * @param e key event
 */
const isGridToggle = (e: React.KeyboardEvent<HTMLElement>) => {
  return e.ctrlKey && e.shiftKey
}

/**
 * The core view of the authenticated experience
 *
 * Resposible for loading the menu, grid, and elements
 */
const CoreView: React.FC = () => {
  // we'll need some state for our toggles
  // in this case, menu and grid
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showGrid, setShowGrid] = useState<boolean>(false)

  // we consume some context...
  // auth lets us know about the user context we're running in
  // elements lets us know about the elements (overlays) we can run
  const { user } = useAuth()
  const { elements } = useElements()

  // TODO(bengreenier): break this up a bit - theres too much going on here
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
