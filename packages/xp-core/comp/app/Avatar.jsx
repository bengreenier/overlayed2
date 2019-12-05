import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import md5 from 'md5'

/**
 * Render a rounded gravtar avatar given an email address
 *
 * @param {email: string} props the properties to render with
 */
export const Avatar = ({ email, ...rest }) => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    background={`url(//s.gravatar.com/avatar/${md5(email.toLowerCase().trim())}?s=80)`}
    {...rest}
  />
)

Avatar.propTypes = {
  /**
   * The email to lookup on gravatar
   */
  email: PropTypes.string.isRequired,
}
