import React from 'react'
import { Sand } from '../cw_shape/Sand'
import { Box, Grommet } from 'grommet'
import { useAuth } from './context/Auth'
import AuthenticatedApp from './authenticated/AuthenticatedApp'
import UnauthenticatedApp from './unauthenticated/UnauthenticatedApp'
import { theme } from './util/theme'

const App: React.FC = () => {
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return (
      <Box width="medium" align="center" animation={{ delay: 1000, type: 'fadeIn' }}>
        <Sand />
      </Box>
    )
  }

  return (
    <Grommet theme={theme}>
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Grommet>
  )
}

export default App
