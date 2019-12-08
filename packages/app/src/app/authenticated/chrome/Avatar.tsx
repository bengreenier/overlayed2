import React from 'react'
import { Box } from 'grommet'

interface Props {
  url: string
}

const Avatar: React.FC<Props> = props => (
  <Box height="xxsmall" width="xxsmall" round="full" background={`url(${props.url})`} />
)

export default Avatar
