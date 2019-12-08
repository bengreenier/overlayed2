import React from 'react'
import { Box, Heading, Anchor } from 'grommet'
import { useAuth } from '../context/Auth'

const UnauthenticatedApp: React.FC = () => {
  const { loginWithRedirect } = useAuth()

  return (
    <Box align="center">
      <Heading>
        Please
        <Anchor onClick={() => loginWithRedirect()}>Log in</Anchor>
      </Heading>
    </Box>
  )
}

export default UnauthenticatedApp
