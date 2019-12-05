import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box } from 'grommet'
import { Navbar } from './Navbar'

export const Layout = ({ view, edit }) => (
  <Grid
    fill={true}
    rows={['xxsmall', 'auto']}
    columns={['xxsmall', 'auto']}
    gap="small"
    areas={[
      { name: 'header', start: [0, 0], end: [1, 0] },
      { name: 'edit', start: [0, 1], end: [0, 1] },
      { name: 'view', start: [1, 1], end: [1, 1] },
    ]}
  >
    <Navbar gridArea="header" background="accent-1" />
    <Box gridArea="edit" background="brand">
      {edit()}
    </Box>
    <Box gridArea="view" background="light-2">
      {view()}
    </Box>
  </Grid>
)

Layout.propTypes = {
  view: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
}
