import React, { useState } from 'react'
import { Stack, Box, Keyboard, Anchor, Collapsible, Text } from 'grommet'
import Avatar from './chrome/Avatar'
import { useAuth } from '../context/Auth'
import GridView from './grid/GridView'
import { theme } from '../util/theme'
import GridResizerElement from './grid/GridResizerElement'
import ClockElement from './grid/ClockElement'
import GridAlignedBox from './grid/GridAlignedBox'

const isMenuToggle = (e: React.KeyboardEvent<HTMLElement>) => {
  return e.ctrlKey && e.shiftKey
}

const CoreView: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const { user } = useAuth()

  return (
    <Keyboard
      target="document"
      onSpace={e => {
        if (isMenuToggle(e)) setShowMenu(!showMenu)
      }}
    >
      <Box height="100vh" background="dark-1">
        <GridView
          initialSize={10}
          scaleBy={10}
          minScale={10}
          maxScale={100}
          color={theme.global.colors['light-1'] as string}
        >
          <GridAlignedBox>
            <Text>Hello1</Text>
          </GridAlignedBox>
          <GridAlignedBox>
            <Text>Hello2</Text>
          </GridAlignedBox>
          <GridAlignedBox>
            <Text>Hello3</Text>
          </GridAlignedBox>

          {/* <GridResizerElement />
          <ClockElement /> */}
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
              <Text weight="bold" color="brand">
                Overlayed
              </Text>
            </Box>
          </Stack>
        </Collapsible>
      </Box>
    </Keyboard>
  )
}

export default CoreView
