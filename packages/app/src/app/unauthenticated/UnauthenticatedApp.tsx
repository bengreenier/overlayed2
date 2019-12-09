import React from 'react'
import { Box, Heading, Anchor } from 'grommet'
import { useAuth } from '../context/Auth'

/**
 * Unauthenticated experience
 */
const UnauthenticatedApp: React.FC = () => {
  // we need to consume the auth context to provide a login button
  // note: we prefer loginWithRedirect as popups are "hard"
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
