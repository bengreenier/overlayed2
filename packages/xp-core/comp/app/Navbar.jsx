import React from 'react'
import PropTypes from 'prop-types'
import { Anchor, Box } from 'grommet'
import { Avatar } from './Avatar'

/**
 * Render a navbar across the top of the page
 */
export const Navbar = props => (
  <Box
    background="light-4"
    pad="small"
    direction="row-reverse"
    gap="xsmall"
    align="center"
    {...props}
  >
    <Avatar email="ben@bengreenier.com" />
    {props.links.map((l, i) => (
      <Anchor key={i} label={l.label} href={l.href} />
    ))}
  </Box>
)

Navbar.propTypes = {
  /**
   * Array of objects describing links and locations
   *
   * @example {label: 'my label', href: '#'}
   */
  links: PropTypes.arrayOf(PropTypes.object),
}

Navbar.defaultProps = {
  links: [],
}
