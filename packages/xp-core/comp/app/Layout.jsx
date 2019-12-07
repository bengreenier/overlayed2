import React from 'react'
import { Grid, Box, Button, Text, Anchor, Paragraph } from 'grommet'
import { Sand } from '../cw_shape/Sand'
import { Avatar } from './Avatar'
import MdQuote from 'react-ionicons/lib/MdQuote'
import MdAddCircle from 'react-ionicons/lib/MdAddCircle'

export const Layout = () => (
  <Grid
    rows={['xxsmall', 'auto']}
    columns={['xxsmall', 'small', 'auto']}
    gap="none"
    areas={[
      { name: 'brand', start: [0, 0], end: [1, 1] },
      { name: 'header', start: [2, 0], end: [2, 0] },
      { name: 'nav', start: [0, 1], end: [0, 1] },
      { name: 'main', start: [1, 1], end: [2, 1] },
    ]}
  >
    <Box
      gridArea="brand"
      background="dark-1"
      direction="row"
      gap="small"
      align="center"
      pad={{ left: 'small', bottom: 'small' }}
    >
      <Text size="medium" color="brand" weight="bold">
        Overlayed
      </Text>
    </Box>
    <Box
      gridArea="header"
      background="dark-1"
      direction="row-reverse"
      gap="small"
      align="center"
      pad={{ right: 'small', bottom: 'small' }}
    >
      <Avatar email="ben@bengreenier.com" />
      <Anchor>Link</Anchor>
      <Anchor>Link</Anchor>
      <Anchor>Link</Anchor>
      <Anchor>Link</Anchor>
    </Box>
    <Box
      gridArea="nav"
      background="dark-5"
      direction="column"
      align="center"
      gap="small"
      pad={{ top: 'small' }}
    >
      <Button hoverIndicator={true}>
        <MdAddCircle />
      </Button>
      <Button hoverIndicator={true}>
        <MdQuote />
      </Button>
    </Box>
    <Box gridArea="main" background="dark-2" pad="medium">
      <Paragraph>Content coming soon - to a theatre near you.</Paragraph>
      <Sand />
    </Box>
  </Grid>
)
