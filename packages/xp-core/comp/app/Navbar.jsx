import React from 'react'
import { useAuth } from './Auth'
import { Box, Button } from 'grommet'

export const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth()

  return (
    <Box>
      {!isAuthenticated && <Button onClick={() => loginWithRedirect({})}>Log in</Button>}

      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </Box>
  )
}
