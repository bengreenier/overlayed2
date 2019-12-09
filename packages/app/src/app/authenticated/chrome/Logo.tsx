import React from 'react'
import { Text } from 'grommet'
import { version } from '../../../../package.json'

/**
 * The overlayed logo and version
 */
const Logo: React.FC = () => {
  return (
    <Text weight="bold" color="brand">
      Overlayed <Text color="accent-1" size="small">{`v${version}`}</Text>
    </Text>
  )
}

export default Logo
