import React from 'react'
import { Sand } from '../cw_shape/Sand'
import { Box, Grommet } from 'grommet'
import { useAuth } from './context/Auth'
import AuthenticatedApp from './authenticated/AuthenticatedApp'
import UnauthenticatedApp from './unauthenticated/UnauthenticatedApp'
import { theme } from './util/theme'

/**
 * The top level app experience
 *
 * Chooses between authenticated and unauthenticated experiences
 */
const App: React.FC = () => {
  // we need to know if the user is authenticated, so we consume the auth context
  const { loading, isAuthenticated } = useAuth()

  // if we don't yet know about auth state, show a loading indicator
  if (loading) {
    // note: this fades in after 1000ms, so if loading takes less than that nothing shows
    // this prevents the ugly "single frame loader" visual
    return (
      <Box width="medium" align="center" animation={{ delay: 1000, type: 'fadeIn' }}>
        <Sand />
      </Box>
    )
  }

  // we wrap our whole app in a grommet context so that theming and formatting for
  // grommet works correctly
  return (
    <Grommet theme={theme}>
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Grommet>
  )
}

export default App
