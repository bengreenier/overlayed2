import React from 'react'
import { Box } from 'grommet'

/**
 * The avatar properties
 */
interface Props {
  /**
   * The image location
   */
  url: string
}

/**
 * A user avatar
 * @param props properties
 */
const Avatar: React.FC<Props> = props => (
  <Box height="xxsmall" width="xxsmall" round="full" background={`url(${props.url})`} />
)

export default Avatar
