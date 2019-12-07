import React from 'react'
import PropTypes from 'prop-types'
import { Box, CheckBox, Heading, List } from 'grommet'

export const Setup = props => (
  <Box
    align="center"
    className="intro"
    animation={{ type: 'fadeIn', delay: props.slideLength * (props.index + 1) }}
  >
    <Heading>We&apos;ve just got a few things we need your help with, first:</Heading>
    <List
      data={[
        {
          checked: true,
          label: 'Boot up meme generator',
        },
        {
          checked: false,
          label: 'Create top-notch content',
        },
        {
          checked: false,
          label: 'Secure big donations',
        },
      ]}
    >
      {datum => {
        return <CheckBox checked={datum.checked} label={datum.label} />
      }}
    </List>
  </Box>
)

Setup.propTypes = {
  index: PropTypes.number.isRequired,
  slideLength: PropTypes.number.isRequired,
}

Setup.defaultProps = {
  slideLength: 5000,
}
